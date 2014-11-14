
/*====================================================================================================*/
Aei.Pages.Tags = function(data) {
	this._data = data;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype.onRender = function() {
	var tagLinks = $('.tagLink');
	var tagLink, weight;

	tagLinks.each(function() {
		tagLink = $(this);
		weight = tagLink.attr('data-weight');
		tagLink.css('opacity', weight*0.75+0.25);
	});
};
