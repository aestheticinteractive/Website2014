
/*====================================================================================================*/
Aei.Background = function(containerId) {
	this._container = $('#'+containerId);
	this._lineData = this._buildLineData();

	var me = this;

	$(window)
		.resize(function() {
			me._handleResize();
		})
		.scroll(function() {
			me._isScrolling = true;
		})
		.mousemove(function() {
			me._isMouseMove = true;
			me._isFocused = true;
		});

	this._handleResize();
	this._redrawAnimFrame();
};


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
	
	var gapSize = 50;
	var i, g;

	for ( i = 0 ; i < data.groups.length ; ++i ) {
		g = data.groups[i];
		g.slopePos = (g.slope > 0);
		g.gap = gapSize*(1+Math.abs(g.slope))*(g.slopePos ? -1 : 1);
		g.lines = [];
	}

	return data;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._addLineData = function(width, height) {
	var data = this._lineData;

	if ( data.width == width && data.height == height ) {
		return;
	}

	var contain = this._container;
	var i, g, offset, px, lineI, lines, linesLen, line, isWithin;

	for ( i = 0 ; i < data.groups.length ; ++i ) {
		g = data.groups[i];
		offset = height*g.slope;
		px = (g.slopePos ? width : 0);
		lineI = 0;
		lines = g.lines;
		linesLen = lines.length;

		while ( true ) {
			isWithin = (g.slopePos ? px+offset > 0 : px+offset < width);

			if ( !isWithin && lineI >= linesLen ) {
				break;
			}

			if ( lineI < linesLen ) {
				line = lines[lineI];
			}
			else {
				line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
				line.opac = this._getRandomOpacity();
				line.stroke = g.color;
				line.animStep = -1;
				lines[lineI] = line;

				contain.append(line);
			}
			
			line.setAttribute('x1', px);
			line.setAttribute('y1', 0);
			line.setAttribute('x2', px+offset);
			line.setAttribute('y2', height);
			line.disp = isWithin;
			this._setLineStyle(line);

			px += g.gap;
			++lineI;
		}
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._getRandomOpacity = function() {
	return Math.random()*0.9+0.1;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._setLineStyle = function(line) {
	if ( !line.disp ) {
		line.setAttribute('style', 'visibility: hidden;');
		return;
	}

	line.setAttribute('style', 'stroke: '+line.stroke+'; stroke-opacity: '+(line.opac*0.05)+';');
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._handleResize = function() {
	var contain = this._container;
	var sw = contain.width();
	var sh = contain.height();
	var w = window.innerWidth;
	var h = window.innerHeight;

	this._addLineData(w, h);
	this._isResizing = true;

	if ( sw < w || sh < h ) {
		contain
			.width(Math.max(w, sw))
			.height(Math.max(h, sh));
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
	
	if ( this._isMouseMove ) {
		this._isMouseMove = false;
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
				line.startOpac = line.opac;
				line.endOpac = this._getRandomOpacity();
				line.animSteps = Math.round(Math.random()*8)+8; //2s to 4s @ 250ms/frame
				line.animStep = line.animSteps;
			}

			prog = (1-line.animStep/line.animSteps);
			range = line.endOpac-line.startOpac;
			line.opac = prog*range+line.startOpac;
			this._setLineStyle(line);
		}
	}
};
