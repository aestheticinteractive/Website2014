
/*====================================================================================================*/
Aei.Queries = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.getListByProperty = function(table, propertyName, item) {
	var filter = function(row) {
		if ( item == null ) {
			return (row[propertyName] != null);
		}

		return (row[propertyName] == item);
	};

	return Aei.Database.selectList(table, filter);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Queries.getCountByProperty = function(table, propertyName, item) {
	return Aei.Queries.getListByProperty(table, propertyName, item).length;
};
