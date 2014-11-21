
/*====================================================================================================*/
Aei.Pages.App = function(rootScope) {
	this._scope = rootScope;
	this._bg = new Aei.Background('background');
	
	var me = this;

	var onLoad = function() {
		me._handleSwitch();
	};

	rootScope.$on('$viewContentLoaded', onLoad);
	$(document).foundation();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._handleSwitch = function() {
	var me = this;
	
	var onTimeout = function() {
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
};