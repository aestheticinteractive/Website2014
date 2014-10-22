
/*====================================================================================================*/
Aei.Pages.Services = function(data) {
	this._data = data;
};

//TODO: use javascript scrollTo http://stackoverflow.com/questions/3163615/how-to-scroll-html-page-to-given-anchor-using-jquery-or-javascript instead of $anchorScroll
//TODO: handle entry/hover animations in custom frame handler (for hovers during entry, fade non-hovered tables)


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype.onRender = function() {
	Aei.Background.IsPaused = true;

	var me = this;
	var fill = this._getFillCell($('table')[0]);

	this._tableI = 0;
	this._origOpac = 0.2;
	this._origPadLeft = fill.css('padding-left');
	this._origW = fill.width();
	
	this._getFillCell('table') //all fills
		.css('padding-left', this._origW+'px')
		.css('opacity', 0);

	this._handleEntry();
	
	$('table')
		.mouseenter(function(evt) {
			me._handleHover(evt.currentTarget, true);
		})
		.mouseleave(function(evt) {
			me._handleHover(evt.currentTarget, false);
		});
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype._getFillCell = function(table) {
	return $(table)
		.children('tbody')
		.children('tr')
		.children('td.fill');
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype._handleEntry = function() {
	if ( this._tableI >= this._data.length ) {
		Aei.Background.IsPaused = false;
		return;
	}

	var me = this;
	var table = $('table').eq(this._tableI);
	
	var animDest = {
		'opacity': this._origOpac,
		'padding-left': this._origPadLeft
	};

	var animOpt = {
		duration: 400,
		complete: function() {
			Aei.Background.IsPaused = false;
		}
	};

	this._getFillCell(table)
		.animate(animDest, animOpt);

	++this._tableI;

	var nextEntry = function() {
		me._handleEntry();
	};

	setTimeout(nextEntry, 50);
};


/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype._handleHover = function(table, isHover) {
	Aei.Background.IsPaused = true;

	var animDest = {
		'opacity': (isHover ? 1 : this._origOpac),
		'padding-left': (isHover ? '0px' : this._origPadLeft)
	};

	var animOpt = {
		duration: 400,
		complete: function() {
			Aei.Background.IsPaused = false;
		}
	};

	this._getFillCell(table)
		.animate(animDest, animOpt);
};
