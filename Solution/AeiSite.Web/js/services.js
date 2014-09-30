

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
		.when('/Services/:link', {
			templateUrl: 'views/Service.html',
			controller: Aei.Controllers.Service,
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
/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('mainMenu', function() {
	return {
		scope: {
			mc: '=mc',
			tag: '=tag',
			title: '=title',
			menu: '=menu'
		},
		templateUrl: 'views/_MainMenu.html'
	};
});

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
