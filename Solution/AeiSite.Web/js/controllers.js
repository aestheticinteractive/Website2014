

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
			name: 'Services',
			url: '/Services'
		},
		{
			name: 'Skills',
			url: '/Skills'
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
Aei.Controllers.Services = function($rootScope, $scope) {
	$scope.model = {
		services: Aei.Database.selectList(Aei.Tables.Service)
	};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Services';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title]);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Service = function($rootScope, $scope, $routeParams) {
	var serv = Aei.Database.selectByUniqueProperty(Aei.Tables.Service, 'link', $routeParams.link);

	$scope.model = {
		service: serv,
		projectUses: Aei.Queries.selectProjectUsesOfService(serv),
		page: null //new Aei.Pages.Service(serv)
	};
	
	$rootScope.tag = 'Service';
	$rootScope.title = serv.name;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Services']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Skills = function($rootScope, $scope) {
	var skills = Aei.Database.selectList(Aei.Tables.Skill);
	var groupMap = {};
	var i, skill, key;

	for ( i in skills ) {
		skill = skills[i];
		key = skill.group.id;

		if ( !groupMap[key] ) {
			groupMap[key] = Aei.Queries.calculateSkillWeights(skill.group);
		}
	}

	$scope.model = {
		skills: skills,
		groupMap: groupMap
	};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Skills';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title]);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Skill = function($rootScope, $scope, $routeParams) {
	var skill = Aei.Database.selectByUniqueProperty(Aei.Tables.Skill, 'link', $routeParams.link);

	$scope.model = {
		skill: skill,
		projectUses: Aei.Queries.selectProjectUsesOfSkill(skill),
		page: null //new Aei.Pages.Project(skill)
	};
	
	$rootScope.tag = 'Skill';
	$rootScope.title = skill.name;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Skills']);
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
	$scope.model = {
		projects: Aei.Tables.Project
	};

	$rootScope.tag = 'Admin';
	$rootScope.title = 'Projects';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Admin']);
};
