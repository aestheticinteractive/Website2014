
/*====================================================================================================*/
Aei.Pages.App = function(rootScope, location) {
	this._scope = rootScope;
	this._location = location;
	
	var me = this;

	var onLoad = function() {
		me._handleSwitch();
	};

	rootScope.$on('$viewContentLoaded', onLoad);
	
	//console.log(Aei);
	$(document).foundation();

	this._bg = new Aei.Background('background');

	$('#site').hide();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype.onMenuDirectiveComplete = function() {
	this._tryShowSite();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._handleSwitch = function() {
	var me = this;
	
	var onTimeout = function() {
		$('main').hide();
		me._handleRender();
	};

	Aei.Background.SetPaused('AppSwitch', true);
	setTimeout(onTimeout, 1);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._handleRender = function() {
	Aei.Background.SetPaused('AppSwitch', false);

	var page = this._scope.page;

	if ( page ) {
		page.onRender();
	}

	this._viewReady = true;
	this._tryShowSite();

	////

	if ( this._lastLoc && this._lastLoc != this._location.path() ) {
		$('body').scrollTop(0);
	}

	this._lastLoc = this._location.path();
	$('main').show();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._tryShowSite = function() {
	if ( this._siteReady || !this._viewReady ) {
		return;
	}

	$('#site').show();
	this._siteReady = true;
};
