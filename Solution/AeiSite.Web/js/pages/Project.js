
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

	while ( true ) {
		var count = -1;

		for ( count in splits.countMap ) {
			break; //TODO: this simply takes the first "count" configuration
		}

		var nextSplits = splits.countMap[count];
		var scaledTotalW = 0;
		var row = [];

		for ( i = 0 ; i < count ; ++i ) {
			item = items[splits.startIndex+i];
			row.push(item);
			scaledTotalW += item.scaledW;
		}

		this._updateRow(row, availW, scaledTotalW, splits.isEndpoint);

		if ( splits.isEndpoint ) {
			break;
		}

		splits = nextSplits;
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
