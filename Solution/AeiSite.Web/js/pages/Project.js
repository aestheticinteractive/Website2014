
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
	var scales = [];
	var percents = [];
	var scaledTotalW = 0;
	var i, image;

	for ( i in images ) {
		image = images[i];
		scales[i] = 1/image.height();
		scaledTotalW += image.width()*scales[i];
	}
	
	for ( i in images ) {
		image = images[i];
		percents[i] = image.width()*scales[i] / scaledTotalW;
		image.width(availW*percents[i]);
	}

	console.log(percents);
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
