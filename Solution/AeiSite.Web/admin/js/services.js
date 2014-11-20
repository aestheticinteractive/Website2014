

////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.RouteBuilder = function($routeProvider) {
	$routeProvider
		
		.when('/', {
			templateUrl: 'views/Home.html',
			controller: Aei.Controllers.Home,
			caseInsensitiveMatch: true
		})
		
		.when('/Projects', {
			templateUrl: 'views/Projects.html',
			controller: Aei.Controllers.AdminProjects,
			caseInsensitiveMatch: true
		})
		.when('/ProjectTags', {
			templateUrl: 'views/ProjectTags.html',
			controller: Aei.Controllers.AdminProjectTags,
			caseInsensitiveMatch: true
		})
		.when('/ProjectTexts', {
			templateUrl: 'views/ProjectTexts.html',
			controller: Aei.Controllers.AdminProjectTexts,
			caseInsensitiveMatch: true
		})
		.when('/Weights', {
			templateUrl: 'views/Weights.html',
			controller: Aei.Controllers.AdminWeights,
			caseInsensitiveMatch: true
		})
		.when('/Timeline', {
			templateUrl: 'views/Timeline.html',
			controller: Aei.Controllers.AdminTimeline,
			caseInsensitiveMatch: true
		})
		
		.otherwise({
			redirectTo: '/'
		});
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular = angular
	.module('Aei', ['ngRoute'])
	.config(['$routeProvider', Aei.RouteBuilder])
	.controller('App', ['$rootScope', '$location', Aei.Controllers.App])
	.controller('Menu', [Aei.Controllers.Menu]);
