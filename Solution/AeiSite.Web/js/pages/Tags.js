
/*====================================================================================================*/
Aei.Pages.Tags = function(groups) {
	this._groups = groups;
	this._groupIndex = 0;
	this._trendData = new Aei.TagsTrendData(2005);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype.onRender = function() {
	/*var tagLinks = $('.tagLink');
	var tagLink, weight;

	tagLinks.each(function() {
		tagLink = $(this);
		weight = tagLink.attr('data-weight');
		tagLink.css('opacity', weight*0.75+0.25);
	});*/

	this._trendData.init();
	console.log(this._trendData);
	this._buildGraph();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._buildGraph = function() {
	var groups = this._groups;
	var group = groups[this._groupIndex];

	for ( var itemI in group.items ) {
		var item = group.items[itemI];
		var values = this._trendData.getTrendValues(group.id, item.id, 28, 0.75);

		var graphDiv = $('#graph-'+item.link);

		for ( var valI in values ) {
			var val = values[valI];
			var h = (val*10+1);

			var bar = $('<div>')
				.addClass('trendRow')
				.css('height', h+'px')
				.css('margin-top', (100-h)+'px');

			graphDiv.append(bar);
		}
	}

	////

	if ( ++this._groupIndex >= groups.length ) {
		return;
	}

	var me = this;
	
	var onTimeout = function() {
		me._buildGraph();
	};

	setTimeout(onTimeout, 50);
};
