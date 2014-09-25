
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

	this._maxTotalScaledW = Math.max(0, Math.min(1, (availW-320)/(1200-320)))*2+2.5;

	for ( i in images ) {
		item = {};
		item.image = images[i];
		item.fullW = item.image.attr('data-w');
		item.fullH = item.image.attr('data-h');
		item.scale = 1/item.fullH;
		item.scaledW = item.fullW*item.scale;
		items.push(item);
	}
	
	console.log("ITEMS: "+items.length);
	var splits = this._splitItems(items, 0, 0, 99);
	console.log(splits);

	while ( true ) {
		var count = -1;

		for ( count in splits.countMap ) {
			break; //TODO: this simply takes the first "count" configuration
		}

		var nextSplits = splits.countMap[count];
		console.log("COUNT: "+count+" / "+nextSplits);
		var scaledTotalW = 0;
		var row = [];

		for ( i = 0 ; i < count ; ++i ) {
			item = items[splits.startIndex+i];
			row.push(item);
			scaledTotalW += item.scaledW;
		}

		console.log("ROW: "+row.length+" / "+availW+" / "+scaledTotalW+" / "+splits.isEndpoint);
		this._updateRow(row, availW, scaledTotalW, splits.isEndpoint);

		if ( splits.isEndpoint ) {
			break;
		}

		splits = nextSplits;
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._updateRow = function(row, availW, scaledTotalW, isLastRow) {
	var i, item, perc;

	if ( isLastRow && scaledTotalW < this._maxTotalScaledW*0.5 ) {
		scaledTotalW = this._maxTotalScaledW;
	}

	availW -= row.length; //1px margins

	for ( i in row ) {
		item = row[i];
		perc = item.fullW*item.scale/scaledTotalW;
		item.image.width(availW*perc);
	}
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------* /
Aei.Pages.Project.prototype._splitRows = function(fullRow, availW) {
	var rowCount = 1;
	var rowI, item, perc;

	//availW -= row.length; //1px margins
	
	while ( true ) {
		for ( rowI in fullRow ) {
			item = fullRow[rowI];
		}

		++rowCount;
	}
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._splitItems = function(items, startIndex, depth, maxDepth) {
	var spaces = '                                ';
	var space = spaces.substr(0, depth*4);
	var minCount = this._getItemCountForRow(items, startIndex, false);
	var maxCount = this._getItemCountForRow(items, startIndex, true);

	var obj = {
		startIndex: startIndex,
		maxDepth: maxDepth,
		isEndpoint: false,
		countMap: null
	};

	var child;

	for ( var i = maxCount ; i >= minCount ; --i ) {
		console.log(space+'i '+i+" / md="+obj.maxDepth);
		
		if ( startIndex+i == items.length ) {
			obj.maxDepth = depth;
			obj.isEndpoint = true;
			obj.countMap = (obj.countMap || {});
			obj.countMap[i] = null;
			console.log(space+'End done '+startIndex+"+"+i+"="+items.length+" / md="+obj.maxDepth);
			continue;
		}

		if ( depth+1 > obj.maxDepth ) {
			console.log(space+'Skip MD '+depth+" / "+obj.maxDepth);
			continue;
		}

		child = this._splitItems(items, startIndex+i, depth+1, obj.maxDepth);

		if ( !child ) {
			console.log(space+'skip null child: '+i);
			continue;
		}

		obj.countMap = (obj.countMap || {});
		obj.countMap[i] = child;
		console.log(space+'child: '+startIndex+" / "+i+" / o="+obj.maxDepth+" / c="+child.maxDepth);
		obj.maxDepth = Math.min(obj.maxDepth, child.maxDepth);
	}

	if ( !obj.isEndpoint && !obj.countMap ) {
		console.log(space+'skip empty node: '+startIndex);
		return null;
	}

	return obj;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._getItemCountForRow = function(items, startIndex, findMax) {
	var totalW = 0;
	var threshold = (findMax ? this._maxTotalScaledW : this._maxTotalScaledW*0.8);
	var i, item;
	//console.log("ROW: "+items.length+" / "+startIndex);

	for ( i = 0 ; i < items.length-startIndex ; ++i ) {
		item = items[i+startIndex];
		totalW += item.scaledW;
		//console.log(" * "+i+" / "+item.scaledW+" / "+totalW+" / "+threshold);

		if ( totalW > threshold ) {
			return i;
		}
	}

	return i;
};

/*----------------------------------------------------------------------------------------------------* /
Aei.Pages.Project.prototype._doesRowFit = function(row, availW) {
	var totalW = 0;
	var maxTotalW = this._maxTotalScaledW;
	var i, item;
	
	for ( i in row ) {
		item = row[i];
		totalW += item.scaledW;

		if ( totalW > maxTotalW ) {
			return false;
		}
	}

	return (totalW > maxTotalW*0.666);
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
