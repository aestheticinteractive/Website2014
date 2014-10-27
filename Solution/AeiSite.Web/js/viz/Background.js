
/*====================================================================================================*/
Aei.Background = function(containerId) {
	this._container = $('#'+containerId);

	this._stage = new Kinetic.Stage({
		container: containerId
	});

	this._lineData = this._buildLineData();

	var me = this;

	$(window).resize(function() {
		me._handleResize();
	});

	$(window).scroll(function() {
		me._isScrolling = true;
	});

	this._handleResize();
	this._redrawAnimFrame();
};

Aei.Background._PauseMap = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._buildLineData = function() {
	var data = {
		width: 0,
		height: 0,
		groups: [
			{
				slope: -0.125,
				color: '#9ff'
			},
			{
				slope: -5,
				color: '#ff9'
			},
			{
				slope: 15,
				color: '#9f9'
			}
		]
	};
	
	var stage = this._stage;
	var gapSize = 50;
	var layerOpacity = 0.04;
	var i, g;

	for ( i = 0 ; i < data.groups.length ; ++i ) {
		g = data.groups[i];
		g.slopePos = (g.slope > 0);
		g.gap = gapSize*(1+Math.abs(g.slope))*(g.slopePos ? -1 : 1);
		g.lines = [];

		g.layer = new Kinetic.Layer();
		g.layer.opacity(layerOpacity);
		stage.add(g.layer);
	}

	return data;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._addLineData = function(width, height) {
	var data = this._lineData;

	if ( data.width == width && data.height == height ) {
		return;
	}

	var i, g, offset, px, lineI, lines, linesLen, line, isWithin;

	for ( i = 0 ; i < data.groups.length ; ++i ) {
		g = data.groups[i];
		offset = height*g.slope;
		px = (g.slopePos ? width : 0);
		lineI = 0;
		lines = g.lines;
		linesLen = lines.length;

		g.layer.clip({
			x: 0,
			y: 0,
			width: width,
			height: height
		});

		while ( true ) {
			isWithin = (g.slopePos ? px+offset > 0 : px+offset < width);

			if ( !isWithin && lineI >= linesLen ) {
				break;
			}

			if ( lineI < linesLen ) {
				line = lines[lineI];
			}
			else {
				line = new Kinetic.Line({
					opacity: this._getRandomOpacity(),
					stroke: g.color, //'#fff',
					strokeWidth: 1
				});
				line.animStep = -1;
				g.layer.add(line);
				lines[lineI] = line;
			}
			
			line.points([
				px, 0,
				px+offset, height
			]);
			line.visible(isWithin);

			px += g.gap;
			++lineI;
		}
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._getRandomOpacity = function() {
	return Math.random()*0.9+0.1;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._handleResize = function() {
	var stage = this._stage;
	var sw = stage.width();
	var sh = stage.height();
	var w = window.innerWidth;
	var h = window.innerHeight;

	this._addLineData(w, h);
	this._isResizing = true;

	if ( sw < w || sh < h ) {
		stage
			.width(Math.max(w, sw))
			.height(Math.max(h, sh));
	}
	else {
		stage.draw();
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._redrawAnimFrame = function() {
	var me = this;
	
	var handleTimeout = function() {
		me._redrawAnimFrame();
	};

	setTimeout(handleTimeout, 250);

	if ( this._isScrolling ) {
		this._isScrolling = false;
		return;
	}
	
	if ( this._isResizing ) {
		this._isResizing = false;
		return;
	}

	if ( Aei.Background.IsPaused() ) {
		return;
	}

	////

	var data = this._lineData;
	var i, g, lineI, lines, linesLen, line, prog, range;


	for ( i = 0 ; i < data.groups.length ; ++i ) {
		g = data.groups[i];
		lines = g.lines;
		linesLen = lines.length;

		for ( lineI = 0 ; lineI < linesLen ; ++lineI ) {
			line = lines[lineI];

			if ( --line.animStep < 0 ) {
				line.startOpac = line.opacity();
				line.endOpac = this._getRandomOpacity();
				line.animSteps = Math.round(Math.random()*8)+8; //2s to 4s @ 250ms/frame
				line.animStep = line.animSteps;
			}

			prog = (1-line.animStep/line.animSteps);
			range = line.endOpac-line.startOpac;
			line.opacity(prog*range+line.startOpac);
		}
	}

	this._stage.draw();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.SetPaused = function(key, pause) {
	Aei.Background._PauseMap[key] = pause;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.IsPaused = function() {
	var map = Aei.Background._PauseMap;

	for ( var key in map ) {
		if ( map[key] == true ) {
			return true;
		}
	}

	return false;
};
