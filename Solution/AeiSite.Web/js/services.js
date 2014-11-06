

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
			controller: Aei.Controllers.Projects,
			caseInsensitiveMatch: true
		})
		.when('/Projects/:link', {
			templateUrl: 'views/Project.html',
			controller: Aei.Controllers.Project,
			caseInsensitiveMatch: true
		})
		
		.when('/Services', {
			templateUrl: 'views/Services.html',
			controller: Aei.Controllers.Services,
			caseInsensitiveMatch: true
		})
		
		.when('/Tags', {
			templateUrl: 'views/Tags.html',
			controller: Aei.Controllers.Tags,
			caseInsensitiveMatch: true
		})
		.when('/Tags/:tagType/:link', {
			templateUrl: 'views/Tag.html',
			controller: Aei.Controllers.Tag,
			caseInsensitiveMatch: true
		})
		
		.when('/Contact', {
			templateUrl: 'views/Contact.html',
			controller: Aei.Controllers.Contact,
			caseInsensitiveMatch: true
		})
		
		.when('/Admin/Projects', {
			templateUrl: 'views/admin/Projects.html',
			controller: Aei.Controllers.AdminProjects,
			caseInsensitiveMatch: true
		})
		.when('/Admin/ProjectTags', {
			templateUrl: 'views/admin/ProjectTags.html',
			controller: Aei.Controllers.AdminProjectTags,
			caseInsensitiveMatch: true
		})
		.when('/Admin/ProjectTexts', {
			templateUrl: 'views/admin/ProjectTexts.html',
			controller: Aei.Controllers.AdminProjectTexts,
			caseInsensitiveMatch: true
		})
		.when('/Admin/Weights', {
			templateUrl: 'views/admin/Weights.html',
			controller: Aei.Controllers.AdminWeights,
			caseInsensitiveMatch: true
		})
		.when('/Admin/Timeline', {
			templateUrl: 'views/admin/Timeline.html',
			controller: Aei.Controllers.AdminTimeline,
			caseInsensitiveMatch: true
		})
		.when('/Admin/Json', {
			templateUrl: 'views/admin/Json.html',
			controller: Aei.Controllers.AdminJson,
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
	.controller('Menu', ['$rootScope', '$location', Aei.Controllers.Menu])
	.controller('Footer', [Aei.Controllers.Footer]);


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.filter('formatDateFromNow', function() {
	return function(date) {
		return moment(date).fromNow();
	};
});

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.filter('formatDate', function() {
	return function(date) {
		return moment(date).format('YYYY-MMM-DD');
	};
});

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.filter('formatDatetime', function() {
	return function(date) {
		return moment(date).format('YYYY-MMM-DD h:mma');
	};
});


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('mainMenu', function() {
	return {
		scope: {
			tag: '=tag',
			title: '=title',
			menu: '=menu'
		},
		templateUrl: 'views/_MainMenu.html'
	};
});

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('mainFooter', function() {
	return {
		scope: {
			footer: '=footer'
		},
		templateUrl: 'views/_MainFooter.html'
	};
});
