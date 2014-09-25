
/*====================================================================================================*/
Aei.Pages.Project = function(data) {
	this._data = data;
	this._images = [];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype.onRender = function() {
	var gallery = $('#gallery');
	var images = gallery.children('img');
	var thisScope = this;

	images.load(function(a) {
		thisScope._onImageLoad($(a.target));
	});

	window.onresize = function() {
		thisScope._updateLayout();
	};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._onImageLoad = function(image) {
	var index = image.attr('data-index');
	this._images[index] = image;

	image
		.show()
		.fadeTo(0, 0)
		.fadeTo(1000, 1)
		.attr('data-w', image.width())
		.attr('data-h', image.height());

	this._updateLayout();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._updateLayout = function() {
	var availW = $('#gallery').width()-1;
	var images = this._images;
	var items = [];
	var i, item;

	this._maxTotalScaledW = Math.max(0, Math.min(1, (availW-320)/(1200-320)))*5+2.5;

	for ( i in images ) {
		item = {};
		item.image = images[i];
		item.fullW = item.image.attr('data-w');
		item.fullH = item.image.attr('data-h');
		item.scale = 1/item.fullH;
		item.scaledW = item.fullW*item.scale;
		items.push(item);
	}
	
	var splits = this._splitItems(items, 0, 0, 99);
	var rowCounts = this._chooseOptimalRowCounts(splits);
	var index = 0;
	var j, count, scaledTotalW, row;

	for ( i in rowCounts ) {
		count = rowCounts[i];
		scaledTotalW = 0;
		row = [];

		for ( j = 0 ; j < count ; ++j ) {
			item = items[index+j];
			row.push(item);
			scaledTotalW += item.scaledW;
		}

		this._updateRow(row, availW, scaledTotalW, splits.isEndpoint);
		index += count;
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._updateRow = function(row, availW, scaledTotalW) {
	var i, item, perc;
	availW -= row.length; //1px margins

	for ( i in row ) {
		item = row[i];
		perc = item.fullW*item.scale/scaledTotalW;
		item.image.width(availW*perc);
	}
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._splitItems = function(items, startIndex, depth, maxDepth) {
	var minCount = this._getItemCountForRow(items, startIndex, false);
	var maxCount = this._getItemCountForRow(items, startIndex, true);
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

		if ( startIndex+count == items.length ) {
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

		child = this._splitItems(items, startIndex+count, depth+1, obj.maxDepth);

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
Aei.Pages.Project.prototype._getItemCountForRow = function(items, startIndex, findMax) {
	var totalW = 0;
	var threshold = (findMax ? this._maxTotalScaledW : this._maxTotalScaledW*0.8);
	var i, item;

	for ( i = 0 ; i < items.length-startIndex ; ++i ) {
		item = items[i+startIndex];
		totalW += item.scaledW;

		if ( totalW > threshold ) {
			return i;
		}
	}

	return i;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._chooseOptimalRowCounts = function(splits) {
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
Aei.Pages.Project.prototype._getSplitArrays = function(splits) {
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


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------* /
Aei.Pages.Project.prototype._setActiveThumb = function(index) {
	if ( this._thumbActiveId != index ) {
		var thumb = $('#thumb'+this._thumbActiveId);
		thumb.animate({ height: '40px' }, 400);
		thumb.children('.overlay').fadeTo(400, 0.8);
	}

	if ( this._thumbActiveId == index ) {
		return;
	}
		
	this._thumbActiveId = index;
	this._updateActiveThumb(true);
};
	

////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------* /
Aei.Pages.Project.prototype._updateActiveThumb = function(animate) {
	var duration = (animate ? 400 : 0);

	var thumb = $('#thumb'+this._thumbActiveId);
	var w = thumb.attr('data-w');
	var h = thumb.attr('data-h');
	h = thumb.width()/w*h;

	thumb.animate({ height: h+'px' }, duration);
	thumb.children('.overlay').fadeTo(duration, 0.0);
};*/
