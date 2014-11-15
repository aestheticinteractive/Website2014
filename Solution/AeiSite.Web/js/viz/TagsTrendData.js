
/*====================================================================================================*/
Aei.TagsTrendData = function(startYear) {
	this._dayBase = new Date(startYear, 0, 1);
	this._dayBaseTime = this._dayBase.getTime();
	this._today = new Date();
	this._tagGroups = Aei.Database.selectList(Aei.Tables.TagGroup);
	this._dateCells = [];
};

Aei.TagsTrendData.MsPerDay = 24*3600*1000;


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype.init = function() {
	var dateCells = this._dateCells;

	if ( dateCells.length ) {
		return;
	}

	var base = this._dayBase;
	var today = this._today;
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var d = new Date(this._dayBase);
	var i = 0;

	while ( true ) {
		dateCells[i++] = {
			projects: [],
			tags: {}
		};

		if ( d > today ) {
			break;
		}

		d = new Date(base);
		d.setDate(d.getDate()+i);
	}
	
	for ( i in projects ) {
		this._fillDateCells(projects[i]);
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype.getTrendValues = function(groupId, itemId, bucketSize, smoothing) {
	var cellTagKey = groupId+'-'+itemId;
	var dateCells = this._dateCells;
	var dateCellsLen = dateCells.length;
	var values = [];
	var i, cell, val;

	for ( i in dateCells ) {
		cell = dateCells[i];
		val = (cell.tags[cellTagKey] || 0);
		//val = (val ? val/cell.projects.length : 0);

		/*if ( i > 0 ) {
			val += values[i-1]*smoothing;
		}*/

		values.push(val);
	}

	//TODO: make the smoothing ease in/out like a bubble shape

	var buckets = [];
	var bucketValue = 0;
	var bucketCount = bucketSize-(dateCellsLen%bucketSize);
	var bucketI;

	for ( i = 0 ; i < dateCells.length ; ++i ) {
		bucketValue += values[i];
		bucketCount++;

		if ( bucketCount >= bucketSize ) {
			bucketI = buckets.length;
			buckets.push(bucketValue/bucketCount);

			if ( bucketI > 0 ) {
				buckets[bucketI] += buckets[bucketI-1]*smoothing;
			}

			bucketValue = 0;
			bucketCount = 0;
		}
	}

	return buckets;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype._fillDateCells = function(project) {
	var timeline = project.timeline;
	var rangeStart = null;
	var i, rangeEnd, event;

	for ( i in timeline ) {
		event = timeline[i];

		if ( event.type == 'start' ) {
			rangeStart = new Date(event.y, event.m-1, (event.d || 1));
		}
			
		if ( event.type == 'end' ) {
			rangeEnd = new Date(event.y, event.m-1, (event.d || 1));
			this._fillDateCellRange(project, rangeStart, rangeEnd);
			rangeStart = null;
		}
	}

	if ( rangeStart ) {
		this._fillDateCellRange(project, rangeStart, this._today);
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype._fillDateCellRange = function(project, dateStart, dateEnd) {
	var cells = this._dateCells;
	var groups = this._tagGroups;
	var cellI = this._getHitIndex(dateStart);
	var cellEndI = this._getHitIndex(dateEnd);
	var cell, groupI, group, tags, tagI, tag, cellTagKey;

	for ( cellI = Math.max(cellI, 0) ; cellI <= cellEndI ; ++cellI ) {
		cell = cells[cellI];

		if ( !cell ) {
			console.log(cellI+' / '+cells.length);
		}

		cell.projects.push(project);
			
		for ( groupI in groups ) {
			group = groups[groupI];

			tags = project[group.id];

			for ( tagI in tags ) {
				tag = tags[tagI];
				cellTagKey = group.id+'-'+tag.item.id;

				if ( cell.tags[cellTagKey] == null ) {
					cell.tags[cellTagKey] = 0;
				}

				cell.tags[cellTagKey] = tag.weight*project.weight;
			}
		}
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype._getHitIndex = function(date) {
	return Math.round((date.getTime()-this._dayBaseTime)/Aei.TagsTrendData.MsPerDay);
};
