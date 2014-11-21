

/*====================================================================================================*/
Aei.Controllers = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.getPageTitle = function(list) {
	return list.join(' | ')+' | Site Admin';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.App = function($rootScope) {
	$rootScope.app = new Aei.Pages.App($rootScope);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Menu = function() {
	this.items = Aei.SiteMap;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Home = function($rootScope) {
	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Home']);
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

			if ( tag.item && tag.item.id == serviceId ) {
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

	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Projects', 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminProjectTags = function($rootScope, $scope) {
	$scope.model = {
		projects: Aei.Tables.Project
	};

	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Project Tags', 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminProjectTexts = function($rootScope, $scope) {
	$scope.model = {
		projects: Aei.Tables.Project
	};

	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Project Texts', 'Admin']);
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

	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Weights', 'Admin']);
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
		projTimes: projTimes
	};

	$rootScope.page = new Aei.Pages.AdminTimeline(projects, events);
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Timeline', 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminJson = function($rootScope, $scope) {
	$scope.model = {
		json: Aei.Admin.buildProjectTable()
	};

	$rootScope.page = null;
	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Json', 'Admin']);
};
