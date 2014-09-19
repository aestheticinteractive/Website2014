

/*====================================================================================================*/
Aei.Controllers = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Menu = function(/*$route, $routeParams,*/ $location) {
	this.isActiveLink = function(path) {
		return ($location.path().substring(0, path.length) == path);
	};

	this.items = [
		{
			name: 'portfolio',
			link: '/Portfolio'
		},
		{
			name: 'services',
			link: '/Services'
		},
		{
			name: 'background',
			link: '/Background'
		},
		{
			name: 'contact',
			link: '/Contact'
		}
	];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Home = function($scope) {
	$scope.model = {};
};



////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Portfolio = function($scope) {
	$scope.model = {};
};



////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Services = function($scope) {
	$scope.model = {};
};



////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Background = function($scope) {
	$scope.model = {};
};



////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Contact = function($scope) {
	$scope.model = {};
};
