
/*====================================================================================================*/
Aei.Queries = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.getPropertyCompareFunc = function(propertyFunc, dir) {
	return function(a, b) {
		var valA = propertyFunc(a);
		var valB = propertyFunc(b);
		return (valA == valB ? 0 : (valA < valB ? 1 : -1))*dir;
	};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.selectProjectTagUsesByItem = function(propName, item) {
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var tagUses = [];
	var pi, ti, proj, projTags, tag;

	for ( pi in projects ) {
		proj = projects[pi];
		projTags = proj[propName];
		
		for ( ti in projTags ) {
			tag = projTags[ti];

			if ( tag.item != item ) {
				continue;
			}

			tagUses.push({
				project: proj,
				tag: tag,
				weight: tag.weight*proj.weight
			});
		}
	}
	
	var propFunc = function(x) { return x.weight; };
	tagUses.sort(Aei.Queries.getPropertyCompareFunc(propFunc, 1));
	return tagUses;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.calculateTagWeights = function(propName, itemList) {
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var itemMap = {};
	var pairs = [];
	var maxWeight = 0;
	var ii, pi, ti, item, proj, projTags, tag, key;

	for ( ii in itemList ) {
		item = itemList[ii];

		itemMap[item.id] = {
			item: item,
			weight: 0
		};
	}
	
	for ( pi in projects ) {
		proj = projects[pi];
		projTags = proj[propName];

		for ( ti in projTags ) {
			tag = projTags[ti];
			key = tag.item.id;
			itemMap[key].weight += tag.weight*proj.weight;
			maxWeight = Math.max(maxWeight, itemMap[key].weight);
		}
	}

	for ( key in itemMap ) {
		itemMap[key].weight /= maxWeight;
		pairs.push(itemMap[key]);
	}
	
	var propFunc = function(x) { return x.weight; };
	pairs.sort(Aei.Queries.getPropertyCompareFunc(propFunc, 1));
	return pairs;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.calculateTagTrends = function(group) {
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var hits = [];
	var msPerDay = 24*3600*1000;
	var dayBase = new Date(2006, 0, 1);
	var dayI = 0;
	var day = new Date(dayBase);
	var today = new Date();
	var maxDayI = 0;
	var projI, tagI, proj, projTags, tag, key;
	var hitIndexes, rangeStart, rangeEnd, timeItem, hitI, hitEnd;

	var getHitIndex = function(date) {
		return Math.round((date.getTime()-dayBase.getTime())/msPerDay);
	};

	var fillHitIndexes = function(indexes, dateStart, dateEnd) {
		hitI = getHitIndex(dateStart);
		hitEnd = getHitIndex(dateEnd);

		for ( ; hitI <= hitEnd ; ++hitI ) {
			indexes.push(hitI);
		}
	};

	var getHitIndexes = function(timeline) {
		var indexes = [];
		rangeStart = null;

		for ( var timeI in timeline ) {
			timeItem = timeline[timeI];

			if ( timeItem.type == 'start' ) {
				rangeStart = new Date(timeItem.y, timeItem.m-1, (timeItem.d || 1));
			}
			
			if ( timeItem.type == 'end' ) {
				rangeEnd = new Date(timeItem.y, timeItem.m-1, (timeItem.d || 1));
				fillHitIndexes(indexes, rangeStart, rangeEnd);
				rangeStart = null;
			}
		}

		if ( rangeStart ) {
			fillHitIndexes(indexes, rangeStart, today);
		}

		return indexes;
	};

	/*while ( day <= today ) {
		hits[dayI] = {};
		dayI++;

		day = new Date(dayBase);
		day.setDate(day.getDate()+dayI);
	}

	console.log('%o %o', dayI, day);*/
	
	////

	for ( projI in projects ) {
		proj = projects[projI];
		projTags = proj[group.id];
		hitIndexes = getHitIndexes(proj.timeline);

		for ( tagI in projTags ) {
			tag = projTags[tagI];
			key = tag.item.id;

			for ( hitI in hitIndexes ) {
				dayI = hitIndexes[hitI];
				
				if ( !hits[dayI] ) {
					hits[dayI] = {};
					maxDayI = Math.max(maxDayI, dayI);
				}
				
				var hit = hits[dayI];

				if ( !hit[key] ) {
					hit[key] = 0;
				}

				hit[key] += tag.weight*proj.weight;
			}
		}
	}

	////

	var trends = [];

	for ( var listI in group.list ) {
		var item = group.list[listI];
		var values = [];

		for ( dayI = 0 ; dayI <= maxDayI ; ++dayI ) {
			hit = hits[dayI];
			values[dayI] = (dayI == 0 ? 0 : values[dayI-1]);
			values[dayI] *= 0.99;

			if ( !hit || !hit[item.id] ) {
				continue;
			}

			values[dayI] += hit[item.id];
		}

		var buckets = [];
		var bucketValue = 0;
		var bucketCount = 0;

		//console.log(item.name);

		for ( dayI = maxDayI ; dayI >= 0 ; --dayI ) {
			bucketValue += values[dayI];
			bucketCount++;

			if ( bucketCount >= 28 ) {
				buckets.unshift(bucketValue/bucketCount);
				bucketValue = 0;
				bucketCount = 0;
			}
		}

		if ( bucketCount ) {
			buckets.unshift(bucketValue/bucketCount);
		}

		//console.log(buckets);

		trends.push({
			item: item,
			values: buckets
		});
	}

	return trends;
};
