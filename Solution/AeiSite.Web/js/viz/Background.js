
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

	this._handleResize();
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
				opacity: 1
			},
			{
				slope: -5,
				opacity: 0.666
			},
			{
				slope: 15,
				opacity: 0.333
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

	var i, g, offset, opac, px, lineI, lines, linesLen, line, isWithin;

	for ( i = 0 ; i < data.groups.length ; ++i ) {
		g = data.groups[i];
		offset = height*g.slope;
		opac = g.opacity;
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
					stroke: 'rgba(255, 255, 255, '+opac+')',
					strokeWidth: 1
				});
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


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._handleResize = function() {
	//var t0 = performance.now();
	var stage = this._stage;
	var sw = stage.width();
	var sh = stage.height();
	var w = window.innerWidth;
	var h = window.innerHeight;
	//var type = 'Resize';
	this._addLineData(w, h);

	if ( sw < w || sh < h ) {
		stage
			.width(Math.max(w, sw))
			.height(Math.max(h, sh));
	}
	else {
		stage.draw();
		//type = 'Draw';
	}

	//var t1 = performance.now();
	//$('#perform').html(type+': '+(t1-t0).toFixed(2)+' ms');
};
