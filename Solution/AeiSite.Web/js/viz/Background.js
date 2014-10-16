
/*====================================================================================================*/
Aei.Background = function(containerId) {
	this._container = $('#'+containerId);

	this._stage = new Kinetic.Stage({
		container: containerId
	});

	this._layerLinesA = new Kinetic.Layer();
	this._layerLinesA.opacity(0.025);
	this._stage.add(this._layerLinesA);

	var me = this;

	$(window).resize(function() {
		me._handleResize();
	});

	this._handleResize();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._handleResize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	if ( this._width == w && this._height == h ) {
		return;
	}

	this._width = w;
	this._height = h;

	this._layerLinesA.destroyChildren();

	var styles = [
		{
			slope: -0.125,
			opacity: 1
		},
		{
			slope: -5,
			opacity: 0.75
		},
		{
			slope: 15,
			opacity: 0.5
		}
	];

	var i, style, offset, opac, px, slopePos;

	for ( i = 0 ; i < styles.length ; ++i ) {
		style = styles[i];
		offset = h*style.slope;
		opac = style.opacity;
		slopePos = (style.slope > 0);
		px = (slopePos  ? w : 0);

		while ( slopePos ? px+offset > 0 : px+offset < w ) {
			var line = new Kinetic.Line({
				points: [
					px, 0,
					px+offset, h
				],
				stroke: 'rgba(255, 255, 255, '+opac+')',
				strokeWidth: 1
			});
			this._layerLinesA.add(line);

			px += 20*(1+Math.abs(style.slope))*(slopePos ? -1 : 1);
		}
	}

	this._layerLinesA.clip({
		x: 0,
		y: 0,
		width: w,
		height: h
	});

	this._stage
		.width(w)
		.height(h);
};
