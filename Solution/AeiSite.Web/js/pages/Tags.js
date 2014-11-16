
/*====================================================================================================*/
Aei.Pages.Tags = function(groups) {
	this._groups = groups;
	this._trendData = new Aei.TagsTrendData(2005, 7, 60);
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
	
	var me = this;
	
	var onTimeout = function() {
		me._buildData();
	};

	setTimeout(onTimeout, 50);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._buildData = function() {
	this._trendData.init();

	this._groupIndex = -1;
	this._setGraphTimeout();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._setGraphTimeout = function() {
	if ( ++this._groupIndex >= this._groups.length ) {
		return;
	}

	var me = this;
	
	var onTimeout = function() {
		me._buildGraph();
	};

	setTimeout(onTimeout, 50);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._buildGraph = function() {
	var t0 = performance.now();
	var groups = this._groups;
	var group = groups[this._groupIndex];
	var graphData = [];

	for ( var itemI in group.items ) {
		var item = group.items[itemI];
		
		graphData.push({
			title: item.name,
			values: this._trendData.getTrendValues(group.id, item.id, 0.667)
		});
	}
	
	var graph = new Aei.TagsTrend('#graph-'+group.link, graphData);
	graph.build();
	
	var t1 = performance.now();
	console.log("buildGraph t1=%o (%o)", t1-t0, group.id);

	this._setGraphTimeout();
};
