

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
	.controller('App', [Aei.Controllers.App])
	.controller('Menu', [Aei.Controllers.Menu]);
	
	
////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('timeline', function() {
	return {
		link: function(scope, element) {
			var projects = Aei.Database.selectList(Aei.Tables.Project);
			var events = Aei.Database.selectList(Aei.Tables.ZachTimeline);
			var t = new Aei.Timeline(projects, events);
			t.build('timeline', 300);
		}
	};
});
