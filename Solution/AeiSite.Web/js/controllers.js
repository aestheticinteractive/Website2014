

/*====================================================================================================*/
Aei.Controllers = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.getPageTitle = function(list) {
	return list.join(' | ')+' | Aesthetic Interactive';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.App = function($rootScope, $location) {
	$rootScope.app = new Aei.Pages.App($rootScope, $location);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Menu = function($rootScope, $location) {
	this.isActiveLink = function(url) {
		return ($location.path().substr(0, url.length) == url);
	};

	this.items = Aei.SiteMap;

	this.onDirectiveComplete = function() {
		$rootScope.app.onMenuDirectiveComplete();
	};
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Footer = function() {
	this.items = Aei.SiteMap;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Home = function($rootScope) {
	$rootScope.page = null;
	$rootScope.pageTitle = 'Aesthetic Interactive | Software Development and Design | Grand Rapids, MI';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Projects = function($rootScope, $scope) {
	$scope.model = {
		projects: Aei.Database.selectList(Aei.Tables.Project)
	};
	
	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Projects']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Project = function($rootScope, $scope, $routeParams) {
	var proj = Aei.Database.selectByUniqueProperty(Aei.Tables.Project, 'link', $routeParams.link);
	//TODO: redirect if project not found (also do this for other detail pages)

	$scope.model = {
		project: proj,
		tags: [
			{
				name: 'Services',
				tagList: proj.services
			},
			{
				name: 'Skills',
				tagList: proj.skills
			},
			{
				name: 'Languages',
				tagList: proj.languages
			},
			{
				name: 'Products',
				tagList: proj.products
			},
			{
				name: 'Systems',
				tagList: proj.systems
			},
			{
				name: 'Team Types',
				tagList: proj.teams
			}
		]
	};
	
	$rootScope.page =  new Aei.Pages.Project(proj);
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([proj.name, 'Projects']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Services = function($rootScope, $scope) {
	var services = Aei.Database.selectList(Aei.Tables.Service);
	
	var splitServices = [
		[ services[0], services[1] ],
		[ services[2], services[3] ],
		[ services[4] ]
	];

	$scope.model = {
		services: services,
		splitServices: splitServices
	};
	
	$rootScope.page = new Aei.Pages.Services(services);
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Services']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Tags = function($rootScope, $scope) {
	var groups = Aei.Database.selectList(Aei.Tables.TagGroup);

	$scope.model = {
		groups: groups
	};
	
	$rootScope.page = new Aei.Pages.Tags(groups, Aei.Queries.getTagTrends());
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Tags']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Tag = function($rootScope, $scope, $routeParams) {
	var tagGroup = Aei.Database.selectByUniqueProperty(
		Aei.Tables.TagGroup, 'link', $routeParams.tagGroupName);
	var item = Aei.Database.selectByUniqueProperty(tagGroup.items, 'link', $routeParams.link);
	var tagTrends = Aei.Queries.getTagTrends();

	$scope.model = {
		item: item,
		section: tagGroup.single,
		tagUses: tagTrends.getTopProjects(tagGroup.id, item.id),
		getDateRange: function(proj) {
			var str = proj.minDate.getFullYear()+'';
			
			if ( proj.minDate.getFullYear() != proj.maxDate.getFullYear() ) {
				str += ' - '+proj.maxDate.getFullYear();
			}

			return str;
		}
	};
	
	$rootScope.page = new Aei.Pages.Tag(item, $scope.model.tagUses);
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([item.name, 'Tags']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Contact = function($rootScope, $scope) {
	$scope.model = {};
	
	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Contact']);
};
