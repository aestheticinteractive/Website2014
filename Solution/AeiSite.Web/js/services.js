

////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.RouteBuilder = function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/Home.html',
			controller: Aei.Controllers.Home
		})
		.when('/Portfolio', {
			templateUrl: 'views/Portfolio.html',
			controller: Aei.Controllers.Portfolio
		})
		.when('/Portfolio/:link', {
			templateUrl: 'views/PortfolioProject.html',
			controller: Aei.Controllers.PortfolioProject
		})
		.when('/Services', {
			templateUrl: 'views/Services.html',
			controller: Aei.Controllers.Services
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
