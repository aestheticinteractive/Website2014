

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
		return ($location.path() == url);
	};

	this.items = Aei.SiteMap;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Footer = function(/*$route, $routeParams,*/ $location) {
	this.items = Aei.SiteMap;
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

	var minDate = new Date(3000, 0, 1);
	var maxDate = new Date(1000, 0, 1);

	var i, item, d;
	
	for ( i in proj.timeline ) {
		item = proj.timeline[i];
		d = (item.type == 'continue' ? new Date() : new Date(item.y, item.m-1, (item.d || 1)));

		if ( d < minDate ) {
			minDate = d;
		}
		
		if ( d > maxDate ) {
			maxDate = d;
		}
	}

	$scope.model = {
		project: proj,
		minDate: minDate,
		maxDate: maxDate,
		page: new Aei.Pages.Project(proj)
	};
	
	$rootScope.tag = 'Project';
	$rootScope.title = proj.name;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Projects']);
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Services = function($rootScope, $scope, $location, $anchorScroll) {
	var services = Aei.Database.selectList(Aei.Tables.Service);

	$scope.model = {
		services: services,
		page: new Aei.Pages.Services(services),
		scrollToAnchor: function(anchor) {
			$location.hash(anchor);
			$anchorScroll();
		}
	};
	
	$rootScope.tag = 'Section';
	$rootScope.title = 'Services';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title]);
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
			pageTag = 'Service';
			break;
			
		case 'skills':
			table = Aei.Database.selectList(Aei.Tables.Skill);
			pageTag = 'Skill';
			break;
			
		case 'languages':
			table = Aei.Database.selectList(Aei.Tables.Language);
			pageTag = 'Language';
			break;
			
		case 'products':
			table = Aei.Database.selectList(Aei.Tables.Product);
			pageTag = 'Product';
			break;
			
		case 'systems':
			table = Aei.Database.selectList(Aei.Tables.System);
			pageTag = 'System';
			break;
			
		case 'teams':
			table = Aei.Database.selectList(Aei.Tables.Team);
			pageTag = 'Team';
			break;
	};

	var item = Aei.Database.selectByUniqueProperty(table, 'link', $routeParams.link);

	$scope.model = {
		item: item,
		section: pageTag,
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
			mgt: getServiceWeight(proj, 'mgt')*proj.weight,
			com: getServiceWeight(proj, 'com')*proj.weight
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

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminWeights = function($rootScope, $scope) {
	var groups = [
		{
			id: 'overall',
			list: [ null ],
			itemWeights: []
		},
		{
			id: 'services',
			list: Aei.Database.selectList(Aei.Tables.Service),
			itemWeights: []
		},
		{
			id: 'skills',
			list: Aei.Database.selectList(Aei.Tables.Skill),
			itemWeights: []
		},
		{
			id: 'languages',
			list: Aei.Database.selectList(Aei.Tables.Language),
			itemWeights: []
		},
		{
			id: 'products',
			list: Aei.Database.selectList(Aei.Tables.Product),
			itemWeights: []
		},
		{
			id: 'systems',
			list: Aei.Database.selectList(Aei.Tables.System),
			itemWeights: []
		},
		{
			id: 'teams',
			list: Aei.Database.selectList(Aei.Tables.Team),
			itemWeights: []
		}
	];

	var gi, ii, pi, group, item, proj, currItemWeights, rank;

	var getWeight = function(project, propName, currItem) {
		var items = project[propName];

		for ( var i in items ) {
			var tag = items[i];

			if ( tag.item == currItem ) {
				return tag.weight*proj.weight;
			}
		}

		return 0;
	};

	var propFunc = function(x) { return x.weight; };

	for ( gi in groups ) {
		group = groups[gi];

		for ( ii in group.list ) {
			item = group.list[ii];

			currItemWeights = {
				item: item,
				ranks: []
			};

			group.itemWeights.push(currItemWeights);

			for ( pi in Aei.Tables.Project ) {
				proj = Aei.Tables.Project[pi];

				rank = {
					project: proj,
					weight: (gi == 0 ? proj.weight : getWeight(proj, group.id, item))
				};

				if ( rank.weight != 0 ) {
					currItemWeights.ranks.push(rank);
				}
			}
			
			currItemWeights.ranks.sort(Aei.Queries.getPropertyCompareFunc(propFunc, 1));
		}
	}

	console.log(groups);

	$scope.model = {
		groups: groups
	};

	$rootScope.tag = 'Admin';
	$rootScope.title = 'Weights';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminTimeline = function($rootScope, $scope) {
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var events = Aei.Database.selectList(Aei.Tables.ZachTimeline);
	var projTimes = [];
	var firstDate = new Date(2005, 0, 1);
	var firstDateTime = firstDate.getTime();
	var msPerDay = 24*3600*1000;
	var totalDays = Math.round((new Date().getTime()-firstDateTime)/msPerDay);
	var pi, proj, projTime, span, item, d, name;

	for ( pi in Aei.Tables.Project ) {
		proj = Aei.Tables.Project[pi];

		projTime = {
			project: proj,
			spans: []
		};

		projTimes.push(projTime);
		span = {};

		for ( var ti in proj.timeline ) {
			item = proj.timeline[ti];
			name = item.type+' '+item.name;

			if ( item.type == 'continue' ) {
				d = new Date();
				name += ' (Present)';
			}
			else {
				d = new Date(item.y, item.m-1, (item.d || 1));
				name += ' ('+d.toDateString()+')';
			}

			if ( item.type == 'start' ) {
				span = {};
				span.name = name;
				span.start = d;
				span.startDay = Math.round((d.getTime()-firstDateTime)/msPerDay);
				span.startRel = span.startDay/totalDays;
			}
			else if ( item.type == 'end' || item.type == 'continue' ) {
				span.name += ' to '+name;
				span.end = d;
				span.endDay = Math.round((d.getTime()-firstDateTime)/msPerDay);
				span.endRel = span.endDay/totalDays;
				projTime.spans.push(span);
			}
		}
	}

	$scope.model = {
		projects: projects,
		events: events,
		projTimes: projTimes,
		page: new Aei.Pages.Timeline(projects, events)
	};

	$rootScope.tag = 'Admin';
	$rootScope.title = 'Timeline';
	$rootScope.pageTitle = Aei.Controllers.getPageTitle([$rootScope.title, 'Admin']);
};