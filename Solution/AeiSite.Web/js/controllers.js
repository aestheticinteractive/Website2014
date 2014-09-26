

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
Aei.Controllers.Home = function($scope) {
	$scope.model = {};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Projects = function($scope) {
	$scope.model = {
		projects: Aei.Database.selectList(Aei.Tables.Project)
	};
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Project = function($scope, $routeParams) {
	var proj = Aei.Database.selectByUniqueProperty(Aei.Tables.Project, 'link', $routeParams.link);

	$scope.model = {
		project: proj,
		page: new Aei.Pages.Project(proj)
	};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Services = function($scope) {
	$scope.model = {
		services: Aei.Database.selectList(Aei.Tables.Service)
	};
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Service = function($scope, $routeParams) {
	var serv = Aei.Database.selectByUniqueProperty(Aei.Tables.Service, 'link', $routeParams.link);

	$scope.model = {
		service: serv,
		page: null //new Aei.Pages.Service(serv)
	};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Skills = function($scope) {
	console.log('here');
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

	console.log(groupMap);

	$scope.model = {
		skills: skills,
		groupMap: groupMap
	};
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Skill = function($scope, $routeParams) {
	var skill = Aei.Database.selectByUniqueProperty(Aei.Tables.Skill, 'link', $routeParams.link);

	$scope.model = {
		skill: skill,
		page: null //new Aei.Pages.Project(skill)
	};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Background = function($scope) {
	$scope.model = {};
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Contact = function($scope) {
	$scope.model = {};
};
