
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
