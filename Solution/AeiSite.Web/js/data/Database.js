
/*====================================================================================================*/
Aei.Database = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Database.selectById = function(table, id) {
	var i, row;

	for ( i in table ) {
		row = table[i];

		if ( row.id == id ) {
			return row;
		}
	}

	return null;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Database.selectList = function(table, rowFilter) {
	var list = [];
	var i, row;

	for ( i in table ) {
		row = table[i];

		if ( !rowFilter || rowFilter(row) ) {
			list.push(row);
		}
	}

	return list;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Database.selectByUniqueProperty = function(table, propertyName, value) {
	var i, row;

	for ( i in table ) {
		row = table[i];

		if ( row[propertyName] == value ) {
			return row;
		}
	}

	return null;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Database.selectListByProperty = function(table, propertyName, value) {
	var filter = function(row) {
		if ( value == null ) {
			return (row[propertyName] != null);
		}

		return (row[propertyName] == value);
	};

	return Aei.Database.selectList(table, filter);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Database.selectCountByProperty = function(table, propertyName, value) {
	return Aei.Queries.getListByProperty(table, propertyName, value).length;
};
