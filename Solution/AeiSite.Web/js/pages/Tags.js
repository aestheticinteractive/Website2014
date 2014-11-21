
/*====================================================================================================*/
Aei.Pages.Tags = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.getItemCalculations = function(group, trendData) {
	var calcs = [];
	var valuesLen = 0;
	var recentCount = 0;
	var maxTopProj = 8;
	var i, j, item, values, recentMax, calc, viPow, val;

	for ( i in group.items ) {
		item = group.items[i];
		values = trendData.getTrendValues(group.id, item.id, 0.25);
		valuesLen = values.length;
		recentCount = 0;
		
		calc = {
			group: group,
			item: item,
			values: values,
			topUses: trendData.getTopProjects(group.id, item.id, maxTopProj),
			recentSum: 0,
			recent: 0,
			peak: 0
		};

		while ( calc.topUses.length < maxTopProj ) {
			calc.topUses.push({});
		}
		
		calcs.push(calc);
	}
	
	for ( i = 0 ; i < valuesLen ; ++i ) {
		viPow = Math.pow(i, 1.4);
		recentCount += viPow;
		recentMax = 0;
		
		for ( j in calcs ) {
			calc = calcs[j];
			val = calc.values[i];
			calc.recentSum += val*viPow;
			recentMax = Math.max(recentMax, calc.recentSum);
		}
		
		for ( j in calcs ) {
			calc = calcs[j];
			calc.recent = (recentMax ? calc.recentSum/recentMax : 0);
			calc.peak = Math.max(calc.peak, calc.recent);
		}
	}
	
	for ( i in calcs ) {
		calc = calcs[i];
		calc.recentSum = null;
	}
	
	calcs.sort(function(a, b) {
		return b.recent-a.recent;
	});

	return calcs;
};
