

/*====================================================================================================*/
Aei.Controllers = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.getPageTitle = function(list) {
	return list.join(' | ')+' | Aesthetic Interactive';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.App = function() {
	Aei.App.init();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Menu = function($rootScope, $location) {
	this.isActiveLink = function(url) {
		return ($location.path().substr(0, url.length) == url);
	};

	this.items = Aei.SiteMap;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Footer = function() {
	this.items = Aei.SiteMap;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Home = function($rootScope) {
	$rootScope.pageTitle = 'Aesthetic Interactive | Software Development and Design | Grand Rapids, MI';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Projects = function($rootScope, $scope) {
	$scope.model = {
		projects: Aei.Database.selectList(Aei.Tables.Project)
	};
	
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Projects']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Project = function($rootScope, $scope, $routeParams, $location) {
	var proj = Aei.Database.selectByUniqueProperty(Aei.Tables.Project, 'link', $routeParams.link);

	if ( !proj ) {
		$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Not Found', 'Projects']);
		return;
	}
	
	var tagGroups = Aei.Database.selectList(Aei.Tables.TagGroup);
	var tags = [];
	var gi, grp;
	
	for ( gi in tagGroups ) {
		grp = tagGroups[gi];
		
		tags.push({
			group: grp,
			tagList: proj[grp.id]
		});
	} 

	$scope.model = {
		project: proj,
		tags: tags
	};
	
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
	
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Services']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Tags = function($rootScope, $scope, $timeout) {
	var groups = Aei.Database.selectList(Aei.Tables.TagGroup);
	var cache = {};

	var getCalcs = function() {
		var group = $scope.model.selected;

		if ( !cache[group.id] ) {
			var calcs = Aei.App.getTagItemCalculations(group, Aei.App.getTagTrends());
			cache[group.id] = calcs;
		}

		return cache[group.id];
	};

	var handleCalcs = function(calcs) {
		$scope.model.calcs = calcs;
	};

	////

	$scope.model = {
		groups: groups,
		selected: groups[0],
		calcs: []
	};

	$scope.selectGroup = function(group) {
		if ( $scope.isGroupSelected(groups) ) {
			return;
		}

		$scope.model.selected = group;
		handleCalcs(getCalcs());

		//$scope.model.calcs = [];
		//$timeout(getCalcs, 20).then(handleCalcs);
	};

	$scope.isGroupSelected = function(group) {
		return (group == $scope.model.selected);
	};
	
	$timeout(getCalcs, 20).then(handleCalcs);

	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Tags']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Tag = function($rootScope, $scope, $routeParams, $timeout) {
	var tagGroup = Aei.Database.selectByUniqueProperty(
		Aei.Tables.TagGroup, 'link', $routeParams.groupLink);
	var item = null;
	
	if ( tagGroup ) {
		item = Aei.Database.selectByUniqueProperty(tagGroup.items, 'link', $routeParams.itemLink);
	}
	
	if ( !item ) {
		$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Not Found', 'Tags']);
		return;
	}
	
	var useI = 0;
	var results, useMax;

	var getNextResults = function() {
		if ( !results ) {
			results = Aei.App.getTagTrends().getTopProjects(tagGroup.id, item.id);
			useMax = Math.min(8, results.length);
		}

		var slice = results.slice(useI, useMax);
		useI = useMax;
		return slice;
	};

	var handleResults = function(resultSlice) {
		$scope.model.tagUses = $scope.model.tagUses.concat(resultSlice);
		$scope.model.tagUsesRemaining = results.length-$scope.model.tagUses.length;
	};

	////

	$scope.model = {
		item: item,
		section: tagGroup.single,
		tagUses: []
	};

	$scope.showMore = function() {
		useMax = Math.min(useMax+8, results.length);
		handleResults(getNextResults());
	};

	$timeout(getNextResults, 20).then(handleResults);
	
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([item.name, 'Tags']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Contact = function($rootScope, $scope) {
	$scope.model = {};
	
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Contact']);
};
