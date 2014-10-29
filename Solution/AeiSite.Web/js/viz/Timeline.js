
/*====================================================================================================*/
Aei.Timeline = function(projects, events, projId) {
	this._projects = projects;
	this._events = events;
	this._projId = projId;
	this._firstDate = new Date(3000, 0, 1);
	this._linesData = this._buildLinesData();
	
	this._firstDate.setDate(this._firstDate.getDate()-27);
	this._firstDateTime = this._firstDate.getTime();
	this._today = new Date();
};

Aei.Timeline.MsPerDay = 24*3600*1000;


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype._buildLinesData = function() {
	var eventLine = this._buildLineData(null, this._events);
	var lines = [ eventLine ];
	var projects = this._projects;
	var pi, proj, line;

	for ( pi in projects ) {
		proj = projects[pi];
		line = this._buildLineData(proj, proj.timeline);
		lines.push(line);

		if ( line.minDate < this._firstDate ) {
			this._firstDate = new Date(line.minDate);
		}
	}
	
	var propFunc = function(x) { return x.minDate; };
	lines.sort(Aei.Queries.getPropertyCompareFunc(propFunc, -1));
	return lines;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype._buildLineData = function(project, rawItems) {
	var line = {
		project: project,
		highlight: 0,
		items: [],
		minDate: new Date(3000, 0, 1),
		maxDate: new Date(1000, 0, 1)
	};

	var range = null;
	var i, item, d, name;

	if ( this._projId ) {
		line.highlight = (project && project.id == this._projId ? 1 : -1);
	}

	for ( i in rawItems ) {
		item = rawItems[i];
		name = item.type+' '+item.name;

		if ( item.type == 'continue' ) {
			d = new Date();
			name += ' ('+d.toDateString()+')';
		}
		else {
			d = new Date(item.y, item.m-1, (item.d || 1));
			name += ' (Present)';
		}

		if ( d < line.minDate ) {
			line.minDate = d;
		}
		
		if ( d > line.maxDate ) {
			line.maxDate = d;
		}

		if ( item.type == 'start' ) {
			range = {
				name: name,
				start: d
			};

			continue;
		}
		
		if ( item.type == 'end' || item.type == 'continue' ) {
			range.name += ' to '+name;
			range.end = d;
			line.items.push(range);
			range = null;
			continue;
		}

		if ( item.type == 'event' ) {
			line.items.push({
				name: name,
				occur: d
			});

			continue;
		}
	}

	return line;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype.build = function(containerId, height) {
	this._contain = $('#'+containerId);
	this._height = height;

	this._stage = new Kinetic.Stage({
		container: containerId
	});

	this._layerGrid = new Kinetic.Layer();
	this._stage.add(this._layerGrid);

	this._layerEvent = new Kinetic.Layer();
	this._stage.add(this._layerEvent);

	this._layerProj = new Kinetic.Layer();
	this._stage.add(this._layerProj);

	this._buildScene();

	////

	var me = this;
	
	var onTimeout = function() {
		//TODO: scroll to highlighted position
		me._contain.scrollLeft(99999);
	};

	setTimeout(onTimeout, 1);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype._getDatePos = function(date) {
	return Math.round((date.getTime()-this._firstDateTime)/Aei.Timeline.MsPerDay*1);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype._buildScene = function() {
	this._buildLabels();
	this._buildEvents();
	this._buildProjects();

	this._stage
		.width(this._getDatePos(this._today))
		.height(this._height+10)
		.draw();
};


/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype._buildLabels = function() {
	var lblConfig = {
		fill: 'rgba(255, 255, 255, 0.25)',
		font: 'Tahoma',
		fontSize: 10,
		align: 'center'
	};

	var maxY = this._today.getFullYear();
	var height = this._height;
	var yi, mi, d, px, gridLine, yearLbl;

	var bg = new Kinetic.Rect({
		width: this._getDatePos(this._today),
		height: this._height,
		fill: '#000',
		opacity: 0.15
	});
	this._layerGrid.add(bg);

	for ( yi = 2000 ; yi <= maxY ; ++yi ) {
		for ( mi = 0 ; mi < 12 ; ++mi ) {
			d = new Date(yi, mi, 1);
			px = this._getDatePos(d)+0.5;
			
			if ( mi == 0 ) {
				yearLbl = new Kinetic.Text(lblConfig);
				yearLbl
					.text(yi+'')
					.x(px-yearLbl.width()/2)
					.y(height-yearLbl.height());
				this._layerGrid.add(yearLbl);
			}

			gridLine = new Kinetic.Line({
				points: [
					px, 0,
					px, height-20
				],
				stroke: 'rgba(255, 255, 255, '+(mi == 0 ? 0.25 : 0.05)+')',
				strokeWidth: 1
			});
			this._layerGrid.add(gridLine);
		}
	};
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype._buildEvents = function() {
	var linesData = this._linesData;
	var height = this._height;
	var li, lineData, ii, item, eventDot;

	for ( li in linesData ) {
		lineData = linesData[li];
		
		if ( lineData.project != null ) {
			continue;
		}

		for ( ii in lineData.items ) {
			item = lineData.items[ii];
			
			eventDot = new Kinetic.Circle({
				x: this._getDatePos(item.occur),
				y: height-40,
				radius: 3,
				fill: '#ffffff',
				opacity: 0.25
			});
			this._layerEvent.add(eventDot);
		}
	}
};


/*----------------------------------------------------------------------------------------------------*/
Aei.Timeline.prototype._buildProjects = function() {
	var	lblConfig = {
		fill: 'rgba(255, 255, 255, 0.666)',
		font: 'Tahoma',
		fontSize: 10,
		align: 'left'
	};

	var linesData = this._linesData;
	var laneMaxDates = [];
	var laneH = 20;
	var centerY = Math.round(this._height*0.35);
	var li, lineData, ii, item, lineI, lineMinDatePlus, laneMaxDate, 
		px, py, fill, opac, projLbl, rangeLine, rangeBox, eventDot;

	for ( li in linesData ) {
		lineData = linesData[li];
		
		if ( lineData.project == null ) {
			continue;
		}

		lineI = 1;
		lineMinDatePlus = new Date(lineData.minDate);
		lineMinDatePlus.setDate(lineMinDatePlus.getDate()-30);

		while ( true ) {
			laneMaxDate = laneMaxDates[lineI];

			if ( !laneMaxDate || lineMinDatePlus > laneMaxDate ) {
				laneMaxDates[lineI] = lineData.maxDate;
				break;
			}

			++lineI;
		}
		
		lineI = Math.floor(lineI/2)*(lineI % 2 ? -1 : 1);
		px = this._getDatePos(lineData.minDate);
		py = centerY+lineI*(laneH+10);
		fill = (lineData.highlight == 1 ? '#8fbc4c' : '#ffffff');
		opac = (lineData.highlight == -1 ? 0.1 : 0.5);

		rangeLine = new Kinetic.Rect({
			x: px,
			y: py,
			width: this._getDatePos(lineData.maxDate)-px,
			height: laneH,
			fill: fill,
			opacity: opac*0.15
		});
		this._layerProj.add(rangeLine);

		for ( ii in lineData.items ) {
			item = lineData.items[ii];
			
			if ( !item.start ) {
				continue;
			}

			px = this._getDatePos(item.start);

			rangeBox = new Kinetic.Rect({
				x: px,
				y: py,
				width: this._getDatePos(item.end)-px,
				height: laneH,
				fill: fill,
				opacity: opac*0.666
			});
			this._layerProj.add(rangeBox);
		}
		
		for ( ii in lineData.items ) {
			item = lineData.items[ii];
			
			if ( !item.occur ) {
				continue;
			}

			eventDot = new Kinetic.Circle({
				x: this._getDatePos(item.occur),
				y: py+laneH/2,
				radius: 3,
				fill: '#ffffff',
				opacity: opac
			});
			this._layerProj.add(eventDot);
		}

		projLbl = new Kinetic.Text(lblConfig);
		projLbl
			.text(lineData.project.id)
			.x(rangeLine.x()+3)
			.y(py+(laneH-projLbl.height())/2+1)
			.opacity(opac*0.7+0.3);
		this._layerProj.add(projLbl);
	}
};
