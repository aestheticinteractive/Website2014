
/*====================================================================================================*/
Aei.Pages.Services = function(data) {
	this._data = data;
	this._services = [];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype.onRender = function() {
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype.onServiceRender = function(service) {
	Aei.Background.IsPaused = true;
	this._services.push(service);
	
	this._getFillCell('table') //all built tables
		.css('opacity', 0.2);

	if ( this._services.length < this._data.length ) {
		return;
	}
	
	var me = this;
	var fill = this._getFillCell($('table')[0]);

	this._tableI = 0;
	this._handleEntry();

	this._origOpac = 0.2;
	this._origPadLeft = fill.css('padding-left');
	
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
	console.log("i "+this._tableI);

	if ( this._tableI >= this._data.length ) {
		Aei.Background.IsPaused = false;
		return;
	}

	var me = this;
	var table = $('table').eq(this._tableI);
	
	var animDest = {
		'opacity': 1
		//'height': table.height()
	};

	var animOpt = {
		duration: 400,
		complete: function() {
			Aei.Background.IsPaused = false;
		}
	};

	table
		.show()
		//.height(0)
		.css('opacity', 0)
		.animate(animDest, animOpt);

	++this._tableI;

	var nextEntry = function() {
		me._handleEntry();
	};

	setTimeout(nextEntry, 100);
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
