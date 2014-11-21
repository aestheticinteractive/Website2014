
/*====================================================================================================*/
Aei.Pages.App = function(rootScope) {
	this._scope = rootScope;
	
	var me = this;

	var onLoad = function() {
		me._handleSwitch();
	};

	rootScope.$on('$viewContentLoaded', onLoad);
	console.log(Aei);
	$(document).foundation();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._handleSwitch = function() {
	var me = this;
	
	var onTimeout = function() {
		me._handleRender();
	};

	setTimeout(onTimeout, 1);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.App.prototype._handleRender = function() {
	var page = this._scope.page;

	if ( page ) {
		page.onRender();
	}
};