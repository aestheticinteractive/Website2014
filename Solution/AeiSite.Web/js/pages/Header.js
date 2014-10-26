
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
Aei.Pages.Header.prototype.onDirectiveComplete = function() {
	var me = this;
	
	var onTimeout = function() {
		me._setupLinks();
		me.onSwitch();
	};

	setTimeout(onTimeout, 1);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Header.prototype.onSwitch = function() {
	if ( this._links ) {
		this._updateOpacity();
	}
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Header.prototype._setupLinks = function() {
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
};

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
