
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
	var i, itemId, values, valuesLen, recentMax, recentCount, calc, vi, viPow, val, key, graph;

	for ( i in group.items ) {
		itemId = group.items[i].id;
		values = trendData.getTrendValues(group.id, itemId, 0.1);
		valuesLen = values.length;
		recentSum = 0;
		recentCount = 0;
		
		calc = {
			itemId: itemId,
			values: values,
			recentSum: 0,
			recent: 0,
			peak: 0
		};
		
		calcs.push(calc);
	}
	
	for ( vi = 0 ; vi < valuesLen ; ++vi ) {
		viPow = Math.pow(vi, 1.4);
		recentCount += viPow;
		recentMax = 0;
		
		for ( i in calcs ) {
			calc = calcs[i];
			val = calc.values[vi];
			calc.recentSum += val*viPow;
			recentMax = Math.max(recentMax, calc.recentSum);
		}
		
		for ( i in calcs ) {
			calc = calcs[i];
			calc.recent = (recentMax ? calc.recentSum/recentMax : 0);
			calc.peak = Math.max(calc.peak, calc.recent);
		}
	}

	for ( i in calcs ) {
		calc = calcs[i];
		key = group.id+'-'+calc.itemId;

		$('#row-'+key)
			.attr('data-sort', calc.recent);

		$('#recent-'+key)
			.css('width', (calc.recent*99)+'%');
		
		$('#peak-'+key)
			.css('width', ((calc.peak-calc.recent)*99)+'%');
		
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
