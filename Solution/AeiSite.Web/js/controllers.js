

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
		projects: Aei.Database.selectList(Aei.Tables.Project),
		services: Aei.Database.selectList(Aei.Tables.Service),
		skills: Aei.Database.selectList(Aei.Tables.Skill)
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
	$scope.model = {};
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
