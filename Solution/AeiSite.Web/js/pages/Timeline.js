
/*====================================================================================================*/
Aei.Pages.Timeline = function(projects, events) {
	this._projects = projects;
	this._events = events;
	this._linesData = this._buildLinesData();
	
	this._firstDate = new Date(1999, 11, 2);
	this._firstDateTime = this._firstDate.getTime();
	this._today = new Date();
	this._height = 300;
};

Aei.Pages.Timeline.MsPerDay = 24*3600*1000;


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Timeline.prototype._buildLinesData = function() {
	var eventLine = this._buildLineData(null, this._events);
	var lines = [ eventLine ];
	var projects = this._projects;
	var pi, proj;

	for ( pi in projects ) {
		proj = projects[pi];

		lines.push(
			this._buildLineData(proj, proj.timeline)
		);
	}
	
	var propFunc = function(x) { return x.minDate; };
	lines.sort(Aei.Queries.getPropertyCompareFunc(propFunc, -1));
	return lines;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Timeline.prototype._buildLineData = function(project, rawItems) {
	var line = {
		project: project,
		items: [],
		minDate: new Date(3000, 0, 1),
		maxDate: new Date(1000, 0, 1)
	};

	var range = null;
	var i, item, d, name;
	
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
Aei.Pages.Timeline.prototype.onRender = function() {
	this._contain = $('#timeline');

	this._stage = new Kinetic.Stage({
		container: 'timeline'
	});

	this._layerGrid = new Kinetic.Layer();
	this._stage.add(this._layerGrid);

	this._layerEvent = new Kinetic.Layer();
	this._stage.add(this._layerEvent);

	this._layerProj = new Kinetic.Layer();
	this._stage.add(this._layerProj);

	this._buildScene();
	this._contain.scrollLeft(9999);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Timeline.prototype._getDatePos = function(date) {
	return Math.round((date.getTime()-this._firstDateTime)/Aei.Pages.Timeline.MsPerDay*0.5);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Timeline.prototype._buildScene = function() {
	this._buildLabels();
	this._buildEvents();
	this._buildProjects();

	this._stage
		.width(this._getDatePos(this._today))
		.height(this._height+10)
		.draw();
};


/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Timeline.prototype._buildLabels = function() {
	var lblConfig = {
		fill: 'rgba(255, 255, 255, 0.25)',
		font: 'Tahoma',
		fontSize: 10,
		align: 'center'
	};

	var maxY = this._today.getFullYear();
	var height = this._height;
	var yi, mi, d, px, gridLine, yearLbl;

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
Aei.Pages.Timeline.prototype._buildEvents = function() {
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
				radius: 4,
				fill: 'rgba(255, 255, 255, 0.5)'
			});
			this._layerEvent.add(eventDot);
		}
	}
};


/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Timeline.prototype._buildProjects = function() {
	var	lblConfig = {
		fill: 'rgba(255, 255, 255, 0.5)',
		font: 'Tahoma',
		fontSize: 10,
		align: 'left'
	};

	var linesData = this._linesData;
	var laneMaxDates = [];
	var li, lineData, ii, item, lineI, lineMinDatePlus, laneMaxDate, 
		px, py, projLbl, rangeLine, rangeBox, eventDot;

	for ( li in linesData ) {
		lineData = linesData[li];
		
		if ( lineData.project == null ) {
			continue;
		}

		lineI = 0;
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
		
		px = this._getDatePos(lineData.minDate);
		py = 40+0.5+lineI*30;

		rangeLine = new Kinetic.Line({
			y: py+10+0.5,
			points: [
				px, 0,
				this._getDatePos(lineData.maxDate), 0
			],
			stroke: 'rgba(255, 255, 255, 0.1)',
			strokeWidth: 4
		});
		this._layerProj.add(rangeLine);

		projLbl = new Kinetic.Text(lblConfig);
		projLbl
			.text(lineData.project.id)
			.x(px+3)
			.y(py+(20-projLbl.height())/2+1);
		this._layerProj.add(projLbl);

		for ( ii in lineData.items ) {
			item = lineData.items[ii];
			
			if ( !item.start ) {
				continue;
			}

			px = this._getDatePos(item.start);

			rangeBox = new Kinetic.Rect({
				x: px+0.5,
				y: py+0.5,
				width: this._getDatePos(item.end)-px,
				height: 20,
				fill: 'rgba(255, 255, 255, 0.2)',
				stroke: 'rgba(255, 255, 255, 0.5)',
				strokeWidth: 1
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
				y: py+10,
				radius: 4,
				fill: 'rgba(255, 255, 255, 0.5)'
			});
			this._layerProj.add(eventDot);
		}
	}
};
