

/*====================================================================================================*/
Aei.Controllers = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.getPageTitle = function(list) {
	return list.join(' | ')+' | Aesthetic Interactive';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Menu = function(/*$route, $routeParams,*/ $location) {
	this.isActiveLink = function(url) {
		return ($location.path().substring(0, url.length) == url);
	};

	this.items = [
		{
			name: 'Projects',
			url: '/Projects'
		},
		{
			name: 'Tags',
			url: '/Tags'
		},
		{
			name: 'Contact',
			url: '/Contact'
		}
	];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Home = function($rootScope, $scope) {
	$rootScope.tag = 'Home';
	$rootScope.title = 'Aesthetic Interactive';
	$rootScope.pageTitle = 'Aesthetic Interactive | Software Development and Design | Grand Rapids, MI';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Projects = function($rootScope, $scope) {
	$rootScope.tag = 'Home';
	$rootScope.title = 'Aesthetic Interactive';

	$scope.model = {
		projects: Aei.Database.selectList(Aei.Tables.Project)
	};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Projects';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title]);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Project = function($rootScope, $scope, $routeParams) {
	var proj = Aei.Database.selectByUniqueProperty(Aei.Tables.Project, 'link', $routeParams.link);
	//TODO: redirect if project not found (also do this for other detail pages)

	$scope.model = {
		project: proj,
		page: new Aei.Pages.Project(proj)
	};
	
	$rootScope.tag = 'Project';
	$rootScope.title = proj.name;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Projects']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Tags = function($rootScope, $scope) {
	var groups = [
		{
			id: 'services',
			link: 'Services',
			list: Aei.Database.selectList(Aei.Tables.Service)
		},
		{
			id: 'skills',
			link: 'Skills',
			list: Aei.Database.selectList(Aei.Tables.Skill)
		},
		{
			id: 'languages',
			link: 'Languages',
			list: Aei.Database.selectList(Aei.Tables.Language)
		},
		{
			id: 'products',
			link: 'Products',
			list: Aei.Database.selectList(Aei.Tables.Product)
		},
		{
			id: 'systems',
			link: 'Systems',
			list: Aei.Database.selectList(Aei.Tables.System)
		},
		{
			id: 'teams',
			link: 'Teams',
			list: Aei.Database.selectList(Aei.Tables.Team)
		}
	];

	var i, group;

	for ( i in groups ) {
		group = groups[i];
		group.tagWeights = Aei.Queries.calculateTagWeights(group.id, group.list);
	}

	$scope.model = {
		groups: groups
	};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Tags';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title]);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Tag = function($rootScope, $scope, $routeParams) {
	var table = null;
	var tagType = $routeParams.tagType.toLowerCase();
	var pageTag = '';

	switch ( tagType ) {
		case 'services':
			table = Aei.Database.selectList(Aei.Tables.Service);
			pageTag = 'Service Tag';
			break;
			
		case 'skills':
			table = Aei.Database.selectList(Aei.Tables.Skill);
			pageTag = 'Skill Tag';
			break;
			
		case 'languages':
			table = Aei.Database.selectList(Aei.Tables.Language);
			pageTag = 'Language Tag';
			break;
			
		case 'products':
			table = Aei.Database.selectList(Aei.Tables.Product);
			pageTag = 'Product Tag';
			break;
			
		case 'systems':
			table = Aei.Database.selectList(Aei.Tables.System);
			pageTag = 'System Tag';
			break;
			
		case 'teams':
			table = Aei.Database.selectList(Aei.Tables.Team);
			pageTag = 'Team Tag';
			break;
	};

	var item = Aei.Database.selectByUniqueProperty(table, 'link', $routeParams.link);

	$scope.model = {
		item: item,
		tagUses: Aei.Queries.selectProjectTagUsesByItem(tagType, item)
	};
	
	$rootScope.tag = pageTag;
	$rootScope.title = item.name;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Tags']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Contact = function($rootScope, $scope) {
	$scope.model = {};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Contact';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title]);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminProjects = function($rootScope, $scope) {
	//Aei.Admin.normalizeServiceWeights();
	//Aei.Admin.buildProjectTable();

	var edits = [];
	var i, proj, edit;

	var getServiceWeight = function(project, serviceId) {
		for ( var si in project.services ) {
			var tag = project.services[si];

			if ( tag.item.id == serviceId ) {
				return tag.weight;
			}
		}

		return 0;
	};

	for ( i in Aei.Tables.Project ) {
		proj = Aei.Tables.Project[i];

		edit = {
			project: proj,
			overall: proj.weight,
			dev: getServiceWeight(proj, 'dev')*proj.weight,
			des: getServiceWeight(proj, 'des')*proj.weight,
			cre: getServiceWeight(proj, 'cre')*proj.weight,
			mgt: getServiceWeight(proj, 'mgt')*proj.weight
		};

		edits.push(edit);
	}

	$scope.model = {
		edits: edits
	};

	$rootScope.tag = 'Admin';
	$rootScope.title = 'Projects';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminProjectTags = function($rootScope, $scope) {
	$scope.model = {
		projects: Aei.Tables.Project
	};

	$rootScope.tag = 'Admin';
	$rootScope.title = 'Project Tags';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Admin']);
};
