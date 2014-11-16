
/*====================================================================================================*/
Aei.TagsTrendData = function(startYear, startMonth, bucketSize) {
	this._dayBase = new Date(startYear, startMonth-1, 1);
	this._dayBaseTime = this._dayBase.getTime();
	this._bucketSize = bucketSize;
	this._dateCellMult = 1/(24*3600*1000)/this._bucketSize;
	this._today = new Date();
	this._projects = Aei.Database.selectList(Aei.Tables.Project);
	this._tagGroups = Aei.Database.selectList(Aei.Tables.TagGroup);
	this._dateCells = [];
	this._projectWeights = {};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype.init = function() {
	var dateCells = this._dateCells;

	if ( dateCells.length ) {
		return;
	}

	var projects = this._projects;
	var today = this._today;
	var maxI = this._getDateCellIndex(today);
	var i;

	for ( i = 0 ; i <= maxI ; ++i ) {
		dateCells[i] = {
			projects: [],
			hits: {}
		};
	}

	for ( i in projects ) {
		this._fillDateCells(projects[i]);
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype.getTrendValues = function(groupId, itemId, smoothing) {
	var cellTagKey = groupId+'-'+itemId;
	var dateCells = this._dateCells;
	var dateCellsLen = dateCells.length;
	var values = [];
	var smoothedValues = [];
	var i, cell, val;

	for ( i = 0 ; i < dateCellsLen ; ++i ) {
		cell = dateCells[i];
		val = (cell.hits[cellTagKey] || 0);
		values[i] = (val ? val/cell.projects.length : 0);
	}

	////

	val = values[0];
	smoothing = 1-Math.pow(1-smoothing, 4);
	
	var valueTarg = val;
	var valueMomentum = 0;
	var easeUp = (1-smoothing)*0.9+0.1;
	var easeDown = (1-smoothing)*0.1+0.000001;

	for ( i in values ) {
		if ( valueTarg > val ) {
			val += (valueTarg-val)*easeUp;
			valueMomentum = 0;
		}
		else if ( valueTarg < val ) {
			valueMomentum -= easeDown;
			val = Math.max(val+valueMomentum, valueTarg);
		}
		else {
			val = valueTarg;
			valueMomentum = 0;
		}

		smoothedValues[i] = val;
		valueTarg = values[i];
	}

	return smoothedValues;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype.getPowerValue = function(groupId, itemId) {
	var cellTagKey = groupId+'-'+itemId;
	var projects = this._projects;
	var projWeights = this._projectWeights;
	var sum = 0;
	var i, proj;

	for ( i in projects ) {
		proj = projects[i];
		sum += (projWeights[proj.id][cellTagKey] || 0);
	}

	return sum;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype._fillDateCells = function(project) {
	var timeline = project.timeline;
	var groups = this._tagGroups;
	var rangeStart = null;
	var weights = {};
	var projWeight = (project.weight*0.75)+0.25;
	var i, group, tags, tagI, tag, rangeEnd, event;

	for ( i in groups ) {
		group = groups[i];
		tags = project[group.id];

		for ( tagI in tags ) {
			tag = tags[tagI];
			weights[group.id+'-'+tag.item.id] = tag.weight*projWeight;
		}
	}

	for ( i in timeline ) {
		event = timeline[i];

		if ( event.type == 'start' ) {
			rangeStart = new Date(event.y, event.m-1, (event.d || 1));
		}
			
		if ( event.type == 'end' ) {
			rangeEnd = new Date(event.y, event.m-1, (event.d || 1));
			this._fillDateCellRange(project, weights, rangeStart, rangeEnd);
			rangeStart = null;
		}
	}

	if ( rangeStart ) {
		this._fillDateCellRange(project, weights, rangeStart, this._today);
	}

	this._projectWeights[project.id] = weights;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype._fillDateCellRange = function(project, weights, dateStart, dateEnd) {
	var cells = this._dateCells;
	var cellI = this._getDateCellIndex(dateStart);
	var cellEndI = this._getDateCellIndex(dateEnd);
	var cell, hits, key;

	for ( cellI = Math.max(cellI, 0) ; cellI <= cellEndI ; ++cellI ) {
		cell = cells[cellI];
		cell.projects.push(project);
		hits = cell.hits;
			
		for ( key in weights ) {
			if ( hits[key] == null ) {
				hits[key] = 0;
			}

			hits[key] += weights[key];
		}
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrendData.prototype._getDateCellIndex = function(date) {
	return Math.round((date.getTime()-this._dayBaseTime)*this._dateCellMult);
};