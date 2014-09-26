

////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.RouteBuilder = function($routeProvider) {
	$routeProvider
		
		.when('/', {
			templateUrl: 'views/Home.html',
			controller: Aei.Controllers.Home
		})

		.when('/Projects', {
			templateUrl: 'views/Projects.html',
			controller: Aei.Controllers.Projects
		})
		.when('/Projects/:link', {
			templateUrl: 'views/Project.html',
			controller: Aei.Controllers.Project
		})
		
		.when('/Services', {
			templateUrl: 'views/Services.html',
			controller: Aei.Controllers.Services
		})
		.when('/Services/:link', {
			templateUrl: 'views/Service.html',
			controller: Aei.Controllers.Service
		})
		
		.when('/Skills', {
			templateUrl: 'views/Skills.html',
			controller: Aei.Controllers.Skills
		})
		.when('/Skills/:link', {
			templateUrl: 'views/Skill.html',
			controller: Aei.Controllers.Skill
		})
		
		.when('/Background', {
			templateUrl: 'views/Background.html',
			controller: Aei.Controllers.Background
		})
		
		.when('/Contact', {
			templateUrl: 'views/Contact.html',
			controller: Aei.Controllers.Contact
		})
		
		.otherwise({
			redirectTo: '/'
		});
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular = angular
	.module('Aei', ['ngRoute'])
	.config(['$routeProvider', Aei.RouteBuilder]);


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
/*----------------------------------------------------------------------------------------------------* /
Aei.Angular.directive('mainMenu', function() {
	return {
		scope: {
			menuController: '=menuController'
		},
		templateUrl: 'views/_MainMenu.html'
	};
});*/

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('initPageAfterRender', function() {
	return {
		scope: {
			page: '=page'
		},
		link: function(scope, element, attrs) {
			var page = scope.page;

			var onTimeout = function() {
				page.onRender();
			};

			setTimeout(onTimeout, 0);
		}
	};
});
