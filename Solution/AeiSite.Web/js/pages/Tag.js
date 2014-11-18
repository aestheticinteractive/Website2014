
/*====================================================================================================*/
Aei.Pages.Tag = function(item, tagUses) {
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tag.prototype.onRender = function() {
	this._initMoreLinks();
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
