
/*====================================================================================================*/
Aei.Pages.Project = function(data) {
	this._data = data;
	this._images = [];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Project.prototype.onRender = function() {
	var gallery = $('#gallery');
	var images = gallery.children('a').children('img');
	var me = this;

	gallery.magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: { 
			enabled:true
		}
	});

	images.load(function(a) {
		me._onImageLoad($(a.target));
	});

	window.onresize = function() {
		me._updateLayout();
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
		.fadeTo(400, 1)
		.attr('data-w', image.width())
		.attr('data-h', image.height());

	var pack = new ImagePack();
	pack.setPadding(1);
	pack.setMinBounds(320, 3.5);
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
