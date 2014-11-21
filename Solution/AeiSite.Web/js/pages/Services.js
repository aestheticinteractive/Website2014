
/*====================================================================================================*/
Aei.Pages.Services = function() {
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype.onRender = function() {
	$('table.service')
		.children('tbody')
		.children('tr')
		.children('td.fill')
		.addClass('entry')
		.children('i')
			.addClass('entry');

	$('a[data-scroll]').click(function() {
		var id = $(this).attr('data-scroll');

		var animDest = {
			'scrollTop': $('#'+id).offset().top
		};

		$('body').animate(animDest, 1000);
	});
};
