
/*====================================================================================================*/
Aei.Draw.Label = function(labelOptions, text) {
	this._options = labelOptions;
	this._initWithText = !IDB.isUndef(text);
	this._fullText = (this._initWithText ? text : '');
	
	this._overlap = false;
	this._offscreen = false;
	
	this._display = new Kinetic.Group();
	this._bg = this._buildBackground();
	this._label = this._buildLabel();

	//LATER: toolTip support
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype._buildBackground = function() {
	var opt = this._options;

	var bg = new Kinetic.Rect({
		width: 100,
		height: 100,
		fill: opt.color.css,
		visible: false
	});

	this._display.add(bg);
	return bg;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype._buildLabel = function() {
	var opt = this._options;
	
    var config = {
		fill: opt.color.css,
		fontSize: opt.size,
		fontStyle: (opt.bold ? 'bold' : 'normal'),
		align: (opt.align || 'center'),
		wrap: 'none',
		text: (this._initWithText ? this._fullText : 'X')
	};

	var lbl = new Kinetic.Text(config);

	if ( !this._initWithText ) {
		lbl.text('');
	}

	this._display.add(lbl);
	return lbl;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype.getDisplay = function() {
	return this._display;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype.getDisplayLabel = function() {
	return this._label;
};

/*----------------------------------------------------------------------------------------------------*/
Object.defineProperties(Aei.Draw.Label.prototype, {
	text: {
		get: function() {
			return this._label.text();
		},
		set: function(text) {
			this._fullText = text;
			this._label.text(text);
		}
	},

	length: {
		get: function() {
			return this.text.length;
		}
	},

	textWidth: {
		get: function() {
			var lbl = this._label;
			var w = lbl.width();
			lbl.width(9999);

			var tw = lbl.getTextWidth();
			lbl.width(w);
			return tw;
		}
	},

	textHeight: {
		get: function() {
			return this._label.getTextHeight();
		}
	},
	
	width: {
		get: function() {
			return this._label.width()*this._display.scaleX();
		},
		set: function(width) {
			this._label.width(width);
			this._updateBg();
		}
	},
	
	height: {
		get: function() {
			return this._label.height()*this._display.scaleY();
		},
		set: function(height) {
			this._label.height(height);
			this._updateBg();
		}
	}

});


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype.rotateFromCenter = function(degrees) {
	var lbl = this._label;
	lbl.offset({ x: lbl.getTextWidth()/2, y: lbl.getTextHeight()/2 });
	lbl.rotation(degrees);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype.getHighlight = function() {
	return this._bg.visible();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype.setHighlight = function(highlight) {
	this._bg.visible(highlight);
	var col = this._options.color;

	if ( highlight ) {
		this._updateBg();
		this._label.fill(col.x.css).opacity(0.9);
	}
	else {
		this._label.fill(col.css).opacity(1);
	}

	this._updateVisible();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype._updateBg = function() {
	this._bg.x(-2);
	this._bg.y(-2);
	this._bg.width(this._label.width()+4);
	this._bg.height(this._label.height()+4);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Draw.Label.prototype._updateVisible = function() {
	this._display.visible((this._bg.visible() || !this._overlap) && !this._offscreen);
};
