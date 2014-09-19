
/*====================================================================================================*/
Aei.Background = function(containerId, logoContainerId) {
	this._container = $('#'+containerId);
	this._logoContainer = $('#'+logoContainerId);

	this._stage = new Kinetic.Stage({
		container: containerId
	});

	this._layerShade = new Kinetic.Layer();
	this._stage.add(this._layerShade);

	var me = this;

	window.onresize = function() {
		me._handleResize();
	};

	this._buildScene();
	this._handleResize();

	this._timeoutCallback = function() {
		me._handleTimeout();
	};
};
	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._buildScene = function() {
	var whiteStops = [];

	for ( var i = 0 ; i <= 11 ; ++i ) {
		var perc = i/11;
		whiteStops.push(perc);
		whiteStops.push('rgba(255, 255, 238, '+Math.pow(1-perc, 3));
	}

	this._highlight = new Kinetic.Rect({
		opacity: 0.4,
        fillRadialGradientStartRadius: 0,
        fillRadialGradientColorStops: whiteStops
	});
	this._layerShade.add(this._highlight);

	var logoLoader = new Image();
	var me = this;

	logoLoader.onload = function() { 
		me._logo = new Kinetic.Image({
			image: logoLoader,
			opacity: 0.2,
			width: 53+60,
			height: 60+60
		});
		me._layerShade.add(me._logo);
		me._continueAfterImageLoad();
	};

	logoLoader.src = 'img/LogoGlow.png';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._continueAfterImageLoad = function() {
	this._anim = 0;
	this._handleResize();
	this._handleTimeout();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._handleResize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	this._stage
		.width(w)
		.height(h);

	this._layerShade.clip({
		x: 0,
		y: 0,
		width: w,
		height: h
	});

	this._glowRadius = Math.max(w, h, 1000)*0.75;

	var logoPos = this._logoContainer.offset();
	logoPos.top -= 17;

	var center = { 
		x: logoPos.left+53/2,
		y: logoPos.top+60/2
	};
	
	this._highlight
		.width(w)
		.height(h)
        .fillRadialGradientStartPoint(center)
        .fillRadialGradientEndPoint(center)
        .fillRadialGradientEndRadius(this._glowRadius);
	
	if ( this._logo ) {
		this._logo
			.x(logoPos.left-30)
			.y(logoPos.top-30);
	}

	this._stage.draw();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Background.prototype._handleTimeout = function() {
	var val = Math.sin(this._anim);
	var rad = this._glowRadius*(1+val*0.1);

	this._highlight.fillRadialGradientEndRadius(rad);

	if ( this._logo ) {
		this._logo.opacity(0.2+val*0.05);
	}

	this._stage.draw();
	this._anim += 0.02;
	this._timeout = setTimeout(this._timeoutCallback, 100);
};
