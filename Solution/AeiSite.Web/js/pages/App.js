
/*====================================================================================================*/
Aei.Pages.App = function(rootScope, location) {
	this._scope = rootScope;
	this._location = location;
	
	var me = this;

	var onLoad = function() {
		me._handleSwitch();
	};

	rootScope.$on('$viewContentLoaded', onLoad);
	
	console.log(Aei);
	$(document).foundation();

	this._header = new Aei.Pages.Header();
	this._bg = new Aei.Background('background');
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype.onMenuDirectiveComplete = function() {
	this._header.onDirectiveComplete();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._handleSwitch = function() {
	//console.log('Path: '+this._location.path());
	Aei.Background.SetPaused('AppSwitch', true);
	$('body').scrollTop(0);
	this._header.onSwitch();

	var me = this;
	
	var onTimeout = function() {
		me._handleRender();
	};

	setTimeout(onTimeout, 1);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._handleRender = function() {
	Aei.Background.SetPaused('AppSwitch', false);

	var page = this._scope.page;

	if ( page ) {
		page.onRender();
	}
};
