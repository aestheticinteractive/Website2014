

/*====================================================================================================*/
Aei.Controllers = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.getPageTitle = function(list) {
	return list.join(' | ')+' | Site Admin';
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.App = function() {
	Aei.App.init();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Menu = function() {
	this.items = Aei.SiteMap;
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.Home = function($rootScope) {
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

	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Projects', 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminProjectTags = function($rootScope, $scope) {
	$scope.model = {
		projects: Aei.Tables.Project
	};

	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Project Tags', 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminProjectTexts = function($rootScope, $scope) {
	$scope.model = {
		projects: Aei.Tables.Project
	};

	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Project Texts', 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminWeights = function($rootScope, $scope) {
	var projLists = [];
	var tagLists = [];
	var tagTrends = Aei.App.getTagTrends();
	var projects = Aei.Database.selectList(Aei.Tables.Project);
	var tagGroups = Aei.Database.selectList(Aei.Tables.TagGroup);
	var projUses = [];
	var pi, proj, gi, tagGroup, ii, item;
	
	for ( pi in projects ) {
		proj = projects[pi];
		
		projUses.push({
			project: proj,
			weight: proj.weight
		});
	}
	
	projLists.push({
		name: 'Overall',
		uses: projUses
	});
	
	for ( gi in tagGroups ) {
		tagGroup = tagGroups[gi];
		tagLists.push(Aei.App.getTagItemCalculations(tagGroup, tagTrends));
		
		for ( ii in tagGroup.items ) {
			item = tagGroup.items[ii];
			
			projLists.push({
				name: tagGroup.name+': '+item.name,
				uses: tagTrends.getTopProjects(tagGroup.id, item.id)	
			});
		}
	}
	
	$scope.model = {
		projLists: projLists,
		tagLists: tagLists
	};

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

	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Timeline', 'Admin']);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Controllers.AdminJson = function($rootScope, $scope) {
	$scope.model = {
		json: Aei.Admin.buildProjectTable()
	};

	$rootScope.pageTitle = Aei.Controllers.getPageTitle(['Json', 'Admin']);
};
