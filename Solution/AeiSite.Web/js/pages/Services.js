
/*====================================================================================================*/
Aei.Pages.Services = function(data) {
	this._data = data;
	this._services = [];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype.onRender = function() {
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype.onServiceRender = function(service) {
	this._services.push(service);

	if ( this._services.length < this._data.length ) {
		return;
	}

	var getFill = function(currTarg) {
		return $(currTarg)
			.children('tbody')
			.children('tr')
			.children('td.fill');
	};

	var fill = getFill($('table')[0]);
	var origColor = fill.css('color');
	var origPadLeft = fill.css('padding-left');

	$('table')
		.mouseenter(function(evt) {
			getFill(evt.currentTarget)
				.css('color', '#666')
				.css('padding-left', '0px');
		})
		.mouseleave(function(evt) {
			getFill(evt.currentTarget)
				.css('color', origColor)
				.css('padding-left', origPadLeft);
		});
};
