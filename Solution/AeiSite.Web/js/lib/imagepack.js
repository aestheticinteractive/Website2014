
/*====================================================================================================*/
ImagePack = function() {
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype.setWidth = function(width) {
	this._width = width;
};

/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype.setPadding = function(padding) {
	this._padding = padding;
};

/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype.setMinBounds = function(width, scaled) {
	this._minW = width;
	this._minScaled = scaled;
};

/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype.setMaxBounds = function(width, scaled) {
	this._maxW = width;
	this._maxScaled = scaled;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype.updateLayout = function(images) {
	this._items = [];
	var i, item;

	var perc = Math.max(0, Math.min(1, (this._width-this._minW)/(this._maxW-this._minW)));
	this._maxTotalScaledW = perc*(this._maxScaled-this._minScaled) + this._minScaled;

	for ( i in images ) {
		item = {};
		item.image = images[i];
		item.fullW = item.image.attr('data-w');
		item.fullH = item.image.attr('data-h');
		item.scale = 1/item.fullH;
		item.scaledW = item.fullW*item.scale;
		this._items.push(item);
	}
	
	var splits = this._splitItems(0, 0, 99);
	var rowCounts = this._chooseOptimalRowCounts(splits);
	var index = 0;
	var j, count, scaledTotalW, row;

	for ( i in rowCounts ) {
		count = rowCounts[i];
		scaledTotalW = 0;
		row = [];

		for ( j = 0 ; j < count ; ++j ) {
			item = this._items[index+j];
			row.push(item);
			scaledTotalW += item.scaledW;
		}

		this._updateRow(row, scaledTotalW, splits.isEndpoint);
		index += count;
	}
};

/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype._updateRow = function(row, scaledTotalW) {
	var i, item, perc;
	var w = this._width - row.length*this._padding;

	for ( i in row ) {
		item = row[i];
		perc = item.fullW*item.scale/scaledTotalW;
		item.image.width(w*perc);
	}
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype._splitItems = function(startIndex, depth, maxDepth) {
	var itemsLen = this._items.length;
	var minCount = this._getItemCountForRow(startIndex, false);
	var maxCount = this._getItemCountForRow(startIndex, true);
	var child;

	var obj = {
		startIndex: startIndex,
		maxDepth: maxDepth,
		isEndpoint: false,
		countMap: null
	};

	//Try the full range of possible counts. Scanning from high-to-low typically finds a minimal 
	//"maxDepth" value sooner (which avoids unnecessary recursion).

	for ( var count = maxCount ; count >= minCount ; --count ) {
		
		//Create an endpoint if this "count" reaches the end of the list

		if ( startIndex+count == itemsLen ) {
			obj.maxDepth = depth;
			obj.isEndpoint = true;
			obj.countMap = (obj.countMap || {});
			obj.countMap[count] = null;
			continue;
		}

		//Stop searching if depth is beyond an already-discovered maximum.

		if ( depth+1 > obj.maxDepth ) {
			continue;
		}

		//Recursively split the remaining list using this "count" value.

		child = this._splitItems(startIndex+count, depth+1, obj.maxDepth);

		//Capture the recursive results, if any.

		if ( child ) {
			obj.countMap = (obj.countMap || {});
			obj.countMap[count] = child;
			obj.maxDepth = Math.min(obj.maxDepth, child.maxDepth);
		}
	}

	//Only return nodes which contain complete paths to the end of the list.

	if ( !obj.isEndpoint && !obj.countMap ) {
		return null;
	}

	return obj;
};

/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype._getItemCountForRow = function(startIndex, findMax) {
	var items = this._items;
	var totalW = 0;
	var threshold = (findMax ? this._maxTotalScaledW : this._maxTotalScaledW*0.8);
	var remaining = items.length-startIndex;
	var i, item;

	for ( i = 0 ; i < remaining ; ++i ) {
		item = items[i+startIndex];
		totalW += item.scaledW;

		if ( totalW > threshold ) {
			return i;
		}
	}

	//TODO: this can lead to rows that do not reach the minimum width requirement. Handle this by
	//not fully-scaling that row during display?

	return i;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype._chooseOptimalRowCounts = function(splits) {
	var countLists = this._getSplitArrays(splits);
	var countInfos = [];
	var i, ci, info, count;

	//Analyze the available "count" options.

	for ( i in countLists ) {
		info = {};
		info.counts = countLists[i];
		info.min = 999;
		info.max = 0;

		for ( ci in info.counts ) {
			count = info.counts[ci];
			info.min = Math.min(info.min, count);
			info.max = Math.max(info.max, count);
		}

		info.range = info.max-info.min;
		countInfos.push(info);
	}

	//Find the option with the least range. If necessary, choose lower counts for the first row, so
	//that those images are larger than the rest.

	countInfos.sort(function(a, b) {
		if ( a.range == b.range ) {
			return (a.counts[0] < b.counts[0] ? -1 : 1);
		}

		return (a.range < b.range ? -1 : 1);
	});

	return countInfos[0].counts;
};

/*----------------------------------------------------------------------------------------------------*/
ImagePack.prototype._getSplitArrays = function(splits) {
	if ( !splits ) {
		return [[]];
	}
	
	var arrays = [];
	var count, childArrays, i;

	//Collapse the "splits" tree into an 2D array of available "count" options.

	for ( count in splits.countMap ) {
		childArrays = this._getSplitArrays(splits.countMap[count]);

		for ( i in childArrays ) {
			arrays.push([ Number(count) ].concat(childArrays[i]));
		}
	}

	return arrays;
};
