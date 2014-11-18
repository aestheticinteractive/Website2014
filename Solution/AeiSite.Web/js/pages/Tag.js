
/*====================================================================================================*/
Aei.Pages.Tag = function(item, tagUses) {
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tag.prototype.onRender = function() {
	this._initMoreLinks();
	this._initExtraProjRows();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tag.prototype._initMoreLinks = function() {
	var link, desc;

	$('a.more')
		.click(function() {
			link = $(this);
			desc = link.parent().children('.desc');

			if ( desc.is(':visible') ) {
				link.html('more <i class="fa fa-caret-down"></i>');
			}
			else {
				link.html('less <i class="fa fa-caret-up"></i>');
			}

			desc.toggle();
		});
};
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tag.prototype._initExtraProjRows = function() {
	var extraProjRows = $('.projRow').show().slice(8);
	extraProjRows.hide();

	var link = $('#showAll');
	var showLink = (extraProjRows.length > 0);
	
	if ( !showLink ) {
		link.parent().hide();
		return;
	}

	link
		.html('Show all projects ('+extraProjRows.length+' more)')
		.click(function() {
			extraProjRows.show();
			$(this).parent().hide();
		});
};
