

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
		.when('/Tags/:groupLink/:itemLink', {
			templateUrl: 'views/Tag.html',
			controller: Aei.Controllers.Tag,
			caseInsensitiveMatch: true
		})
		
		.when('/Contact', {
			templateUrl: 'views/Contact.html',
			controller: Aei.Controllers.Contact,
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
	.controller('App', ['$rootScope', Aei.Controllers.App])
	.controller('Menu', ['$rootScope', '$location', Aei.Controllers.Menu])
	.controller('Footer', [Aei.Controllers.Footer])
	.run(["$rootScope", "$window", function($rootScope, $window) {
		$rootScope.$on('$routeChangeSuccess', function(/*evt, absNewUrl, absOldUrl*/) {
			var onTimeout = function() {
				$window.scrollTo(0, 0);
			};

			setTimeout(onTimeout, 1);
		});
	}]);


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

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('tagTrendGraph', function() {
	return {
		scope: {
			values: '=values'
		},
		link: function(scope, element) {
			var graph = new Aei.SparkArea(element[0], scope.values);
			setTimeout(function() { graph.build(); }, 1);
		}
	};
});

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('servicesPageEntry', function() {
	return {
		link: function() {
			var onTimeout = function() {
				$('table.service tbody tr td.fill')
					.addClass('entry')
					.children('i')
						.addClass('entry');

				$('a[data-scroll]').click(function() {
					var id = $(this).attr('data-scroll');

					var animDest = {
						'scrollTop': $('#'+id).offset().top
					};

					$('body').animate(animDest, 1000);
				});
			};

			setTimeout(onTimeout, 1);
		}
	};
});
