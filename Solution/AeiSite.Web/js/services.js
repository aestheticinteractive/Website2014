

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
	.controller('App', [Aei.Controllers.App])
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
Aei.Angular.directive('onDelay', function() {
	return {
		scope: {
			delayMs: '=delayMs',
			delayClass: '=delayClass'
		},
		link: function(scope, element) {
			var onTimeout = function() {
				$(element).addClass(scope.delayClass);
			};
			
			setTimeout(onTimeout, (scope.delayMs || 1))
		}
	};
});

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('scrollTo', function() {
	return {
		scope: {
			targetId: '=targetId'
		},
		link: function(scope, element) {
			$(element).click(function() {
				var animDest = {
					scrollTop: $('#'+scope.targetId).offset().top
				};
				
				$('body').animate(animDest, 1000);
			});
		}
	};
});

/*----------------------------------------------------------------------------------------------------*/
Aei.Angular.directive('projectGallery', function() {
	return {
		link: function(scope, element) {
			var gallery = $(element);
			gallery.css('opacity', 0);

			var images = [];
			var imageCount = 0;
			var loadCount = 0;
			var galleryVisible = false;

			var imagePack = new ImagePack();
			imagePack.setPadding(1);
			imagePack.setMinBounds(320, 3.5);
			imagePack.setMaxBounds(1200, 7.5);

			var onTimeout = function() {
				var imgList = gallery.children('a').children('img');
				imageCount = imgList.length;

				gallery.magnificPopup({
					delegate: 'a',
					type: 'image',
					gallery: {
						enabled:true
					}
				});

				imgList.load(function(a) {
					onImageLoad($(a.target));
				});

				window.onresize = function() {
					updateLayout();
				};
			};
			
			var onImageLoad = function(image) {
				var index = image.attr('data-index');
				images[index] = image;

				image
					.show()
					.css('opacity', 1)
					.attr('data-w', image.width())
					.attr('data-h', image.height());

				if ( !galleryVisible && ++loadCount > Math.min(2, imageCount) ) {
					gallery.css('opacity', 1);
					galleryVisible = true;
				}

				if ( galleryVisible ) {
					updateLayout();
				}
			};
			
			var updateLayout = function() {
				var w = gallery.width()-1;
				imagePack.setWidth(w);
				imagePack.updateLayout(images);
			};

			setTimeout(onTimeout, 1);
		}
	};
});
