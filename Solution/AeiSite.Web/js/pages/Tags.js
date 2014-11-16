
/*====================================================================================================*/
Aei.Pages.Tags = function(groups) {
	this._groups = groups;
	this._trendData = new Aei.TagsTrendData(2005, 7, 90);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype.onRender = function() {
	var me = this;
	
	var onTimeout = function() {
		me._buildData();
	};

	setTimeout(onTimeout, 20);
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

	setTimeout(onTimeout, 20);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._buildGraph = function() {
	var t0 = performance.now();
	var trendData = this._trendData;
	var groups = this._groups;
	var group = groups[this._groupIndex];
	var calcs = [];
	var powerMax = 0;
	var i, itemId, calc, key, graph;

	for ( i in group.items ) {
		itemId = group.items[i].id;

		calc = {
			itemId: itemId,
			values: trendData.getTrendValues(group.id, itemId, 0.1),
			power: trendData.getPowerValue(group.id, itemId)
		};

		calcs.push(calc);
		powerMax = Math.max(powerMax, calc.power);
	}

	for ( i in calcs ) {
		calc = calcs[i];
		calc.power /= powerMax;

		key = group.id+'-'+calc.itemId;

		$('#row-'+key)
			.attr('data-sort', calc.power);

		$('#power-'+key)
			.css('width', (calc.power*100)+'%');

		graph = new Aei.TagsTrend('#graph-'+key, calc.values);
		graph.build();
	}

	////

	var rows = $('#tbody-'+group.id).children().detach();
	
	rows.sort(function(a, b) {
		return $(b).attr('data-sort')-$(a).attr('data-sort');
	});

	$('#tbody-'+group.id).append(rows);

	////

	var t1 = performance.now();
	console.log("buildGraph t1=%o (%o)", t1-t0, group.id);

	this._setGraphTimeout();
};
