
/*====================================================================================================*/
Aei.Pages.Project = function(data) {
	this._data = data;
	this._images = [];
	this._timeline = new Aei.Timeline(Aei.Tables.Project, Aei.Tables.ZachTimeline, data.id);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype.onRender = function() {
	var gallery = $('#gallery');
	var images = gallery.children('img');
	var me = this;

	images.load(function(a) {
		me._onImageLoad($(a.target));
	});

	window.onresize = function() {
		me._updateLayout();
	};

	this._timeline.build('timeline', 300);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._onImageLoad = function(image) {
	var index = image.attr('data-index');
	this._images[index] = image;

	image
		.show()
		.fadeTo(0, 0)
		.fadeTo(400, 1)
		.attr('data-w', image.width())
		.attr('data-h', image.height());

	var pack = new ImagePack();
	pack.setPadding(1);
	pack.setMinBounds(320, 2.5);
	pack.setMaxBounds(1200, 7.5);
	this._imagePack = pack;

	this._updateLayout();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype._updateLayout = function() {
	var w = $('#gallery').width()-1;

	this._imagePack.setWidth(w);
	this._imagePack.updateLayout(this._images);
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
