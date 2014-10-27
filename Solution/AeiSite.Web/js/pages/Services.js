
/*====================================================================================================*/
Aei.Pages.Services = function(data) {
	this._data = data;
};

//TODO: use javascript scrollTo http://stackoverflow.com/questions/3163615/how-to-scroll-html-page-to-given-anchor-using-jquery-or-javascript instead of $anchorScroll


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype.onRender = function() {
	var tables = $('table');
	var fill = this._getFillCell(tables[0]);
	var me = this;

	this._tables = tables;
	this._origOpac = 0.25;
	this._origPadLeft = 10;
	this._origW = fill.width();

	tables
		.show()
		.mouseenter(function(evt) {
			me._handleHover(evt.currentTarget, true);
		})
		.mouseleave(function(evt) {
			me._handleHover(evt.currentTarget, false);
		});

	this._beginEntryAnim();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype._getFillCell = function(table) {
	return $(table)
		.children('tbody')
		.children('tr')
		.children('td.fill');
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype._beginEntryAnim = function() {
	var tables = this._tables;
	var tableCount = tables.length;
	var tableAnims = [];
	var me = this;
	var i, animOpac, animPos, animFull;

	var onRepFrame = function() {
		me._handleRepeaterFrame();
	};

	var rep = new Aei.Repeater();
	rep.getEventHandler().addListener(Aei.Repeater.FrameEvent, onRepFrame);

	this._repeat = rep;
	this._tableAnims = tableAnims;

	for ( i = 0 ; i < tableCount ; ++i ) {
		animOpac = new Aei.Anim('Table'+i+'-Opac', rep);
		animOpac.start(0, this._origOpac, 500, Aei.Anim.EaseLinear, i*100);
		animOpac.data.isDone = false;
		
		animPos = new Aei.Anim('Table'+i+'-Pos', rep);
		animPos.start(this._origW, this._origPadLeft, 500, Aei.Anim.EaseOut3, i*100);
		animPos.data.isDone = false;
		
		animFull = new Aei.Anim('Table'+i+'-Full', rep);
		animFull.start(1, 1, 0, Aei.Anim.EaseLinear, 0);
		animFull.data.isDone = false;

		tableAnims.push({
			opac: animOpac,
			pos: animPos,
			full: animFull
		});
	}

	Aei.Background.SetPaused('ServicesAnim', true);
	rep.start(30);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype._handleHover = function(table, isHover) {
	var index = this._tables.index(table);
	var tables = this._tables;
	var tableAnims = this._tableAnims;
	var tableCount = tables.length;
	var rep = this._repeat;
	var i, tableAnim, animOpac, animPos, animFull, targOpac, targPos, targFull;

	for ( i = 0 ; i < tableCount ; ++i ) {
		tableAnim = tableAnims[i];
		animOpac = tableAnim.opac;
		animPos = tableAnim.pos;
		animFull = tableAnim.full;

		if ( i == index ) {
			targOpac = (isHover ? 1 : this._origOpac);
			targPos = (isHover ? 0 : this._origPadLeft);
			targFull = 1;
		}
		else {
			targOpac = this._origOpac;
			targPos = this._origPadLeft; //(isHover ? this._origW*0.4 : this._origPadLeft);
			targFull = (isHover ? 0.333 : 1);
		}
		
		animOpac.start(animOpac.getValue(), targOpac, 250, Aei.Anim.EaseLinear);
		animOpac.data.isDone = false;
		
		animPos.start(animPos.getValue(), targPos, 250, Aei.Anim.EaseOut3);
		animPos.data.isDone = false;

		animFull.start(animFull.getValue(), targFull, 250, Aei.Anim.EaseOut);
		animFull.data.isDone = false;
	}

	////

	Aei.Background.SetPaused('ServicesAnim', true);

	if ( !rep.isActive() ) {
		rep.start(30);
	}
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Services.prototype._handleRepeaterFrame = function() {
	var tables = this._tables;
	var tableAnims = this._tableAnims;
	var tableCount = tables.length;
	var active = false;
	var i, tableAnim, animOpac, animPos, animFull;

	for ( i = 0 ; i < tableCount ; ++i ) {
		tableAnim = tableAnims[i];
		animOpac = tableAnim.opac;
		animPos = tableAnim.pos;
		animFull = tableAnim.full;

		if ( animOpac.data.isDone ) {
			continue;
		}

		this._getFillCell(tables.eq(i)[0])
			.css('opacity', animOpac.getValue())
			.css('padding-left', animPos.getValue()+'px');

		tables.eq(i)
			.css('opacity', animFull.getValue());
		
		if ( animOpac.getProgress() >= 1 && animPos.getProgress() >= 1 && animFull.getProgress() >= 1 ){
			animOpac.data.isDone = true;
			animPos.data.isDone = true;
			animFull.data.isDone = true;
		}
		else {
			active = true;
		}
	}

	Aei.Background.SetPaused('ServicesAnim', active);

	if ( !active ) {
		this._repeat.stop();
	}
};
