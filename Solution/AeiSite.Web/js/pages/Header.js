
/*====================================================================================================*/
Aei.Pages.Header = function() {
	this._animOpt = {
		duration: 250,
		queue: false,
		complete: function() {
			Aei.Background.IsPaused = false;
		}
	};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Header.prototype.onSwitch = function() {
	if ( this._isInit ) {
		return;
	}

	this._isInit = true;
	$('header a').hide();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Header.prototype.onRender = function() {
	if ( this._links ) {
		this._updateOpacity();
		return;
	}

	var me = this;

	this._links = $('header a');

	this._links
		.show()
		.css('opacity', 0)
		.mouseenter(function(evt) {
			me._updateOpacity($(evt.currentTarget));
		})
		.mouseleave(function(evt) {
			me._updateOpacity();
		});

	this._updateOpacity();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Header.prototype._updateOpacity = function(hoverLink) {
	var opt = this._animOpt;

	this._links.each(function() {
		var link = $(this);
		var isHovered = (hoverLink && link[0] == hoverLink[0]);
		var opac = 1;
		
		if ( link.hasClass('logoLink') ) {
			opac = (isHovered ? 1 : 0.5);
		}
		else if ( !link.hasClass('active') ) {
			opac = (isHovered ? 0.5 : 0.25);
		}
		
		var animDest = {
			'opacity': opac
		};

		link.animate(animDest, opt);
	});

	Aei.Background.IsPaused = true;
};
