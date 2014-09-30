
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
