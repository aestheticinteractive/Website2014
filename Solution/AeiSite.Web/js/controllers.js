

/*====================================================================================================*/
Aei.Controllers = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Menu = function(/*$route, $routeParams,*/ $location) {
	this.isActiveLink = function(path) {
		return ($location.path().substring(0, path.length) == path);
	};

	this.items = [
		{
			name: 'projects',
			link: '/Projects'
		},
		{
			name: 'services',
			link: '/Services'
		},
		{
			name: 'background',
			link: '/Background'
		},
		{
			name: 'contact',
			link: '/Contact'
		}
	];
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Home = function($rootScope, $scope) {
	$rootScope.tag = 'Home';
	$rootScope.title = 'Aesthetic Interactive';
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
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Project = function($rootScope, $scope, $routeParams) {
	var proj = Aei.Database.selectByUniqueProperty(Aei.Tables.Project, 'link', $routeParams.link);

	$scope.model = {
		project: proj,
		page: new Aei.Pages.Project(proj)
	};
	
	$rootScope.tag = 'Project';
	$rootScope.title = proj.name;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Services = function($rootScope, $scope) {
	$scope.model = {
		services: Aei.Database.selectList(Aei.Tables.Service)
	};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Services';
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Service = function($rootScope, $scope, $routeParams) {
	var serv = Aei.Database.selectByUniqueProperty(Aei.Tables.Service, 'link', $routeParams.link);

	$scope.model = {
		service: serv,
		page: null //new Aei.Pages.Service(serv)
	};
	
	$rootScope.tag = 'Service';
	$rootScope.title = serv.name;
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
			groupMap[key] = [];
		}

		groupMap[key].push(skill);
	}

	$scope.model = {
		skills: skills,
		groupMap: groupMap
	};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Skills';
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Skill = function($rootScope, $scope, $routeParams) {
	var skill = Aei.Database.selectByUniqueProperty(Aei.Tables.Skill, 'link', $routeParams.link);

	$scope.model = {
		skill: skill,
		page: null //new Aei.Pages.Project(skill)
	};
	
	$rootScope.tag = 'Skill';
	$rootScope.title = skill.name;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Background = function($rootScope, $scope) {
	$scope.model = {};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Background';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Contact = function($rootScope, $scope) {
	$scope.model = {};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Contact Aesthetic Interactive';
};
