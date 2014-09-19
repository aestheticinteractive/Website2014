
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
