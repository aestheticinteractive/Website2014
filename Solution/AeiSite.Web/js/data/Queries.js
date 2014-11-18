
/*====================================================================================================*/
Aei.Queries = {};
Aei.Queries._TrendData = null;


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
Aei.Queries.getTagTrends = function() {
	if ( !Aei.Queries._TrendData ) {
		Aei.Queries._TrendData = new Aei.TagTrends(2005, 6, 90);
		Aei.Queries._TrendData.init();
	}

	return Aei.Queries._TrendData;
};
