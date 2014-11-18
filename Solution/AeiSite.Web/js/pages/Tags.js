
/*====================================================================================================*/
Aei.Pages.Tags = function(groups, trendData) {
	this._groups = groups;
	this._trendData = trendData;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype.onRender = function() {
	this._groupIndex = 0;
	this._initTabs();
	this._initMoreLinks();
	this._buildGraph();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._setGraphTimeout = function() {
	if ( ++this._groupIndex >= this._groups.length ) {
		return;
	}

	var me = this;
	
	var onTimeout = function() {
		me._buildGraph();
	};

	setTimeout(onTimeout, 1);
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._buildGraph = function() {
	var t0 = performance.now();
	var trendData = this._trendData;
	var groups = this._groups;
	var group = groups[this._groupIndex];
	var calcs = [];
	var valuesLen = 0;
	var recentCount = 0;
	var maxTopProj = 8;
	var i, j, itemId, values, recentMax, calc, vi, viPow, val, key, graph, projHold, topProj, projLink;

	for ( i in group.items ) {
		itemId = group.items[i].id;
		values = trendData.getTrendValues(group.id, itemId, 0.25);
		valuesLen = values.length;
		recentSum = 0;
		recentCount = 0;
		
		calc = {
			itemId: itemId,
			values: values,
			topProj: trendData.getTopProjects(group.id, itemId, maxTopProj),
			recentSum: 0,
			recent: 0,
			peak: 0
		};
		
		calcs.push(calc);
	}
	
	for ( vi = 0 ; vi < valuesLen ; ++vi ) {
		viPow = Math.pow(vi, 1.4);
		recentCount += viPow;
		recentMax = 0;
		
		for ( i in calcs ) {
			calc = calcs[i];
			val = calc.values[vi];
			calc.recentSum += val*viPow;
			recentMax = Math.max(recentMax, calc.recentSum);
		}
		
		for ( i in calcs ) {
			calc = calcs[i];
			calc.recent = (recentMax ? calc.recentSum/recentMax : 0);
			calc.peak = Math.max(calc.peak, calc.recent);
		}
	}

	for ( i in calcs ) {
		calc = calcs[i];
		key = group.id+'-'+calc.itemId;

		$('#row-'+key)
			.attr('data-sort', calc.recent);

		$('#recent-'+key)
			.css('width', (calc.recent*100)+'%');
		
		$('#peak-'+key)
			.css('width', ((calc.peak-calc.recent)*100)+'%');
			
		graph = new Aei.SparkArea('#graph-'+key, calc.values);
		graph.build();

		projHold = $('#proj-'+key);

		for ( j = 0 ; j < maxTopProj ; ++j ) {
			topProj = calc.topProj[j];

			if ( !topProj ) {
				projLink = $('<span>')
					.addClass('topProj')
					.addClass('empty');
				projHold.append(projLink);
				continue;
			}

			projLink = $('<a>')
				.addClass('topProj')
				.attr('href', '#/Projects/'+topProj.project.link)
				.css('opacity', topProj.weight)
				.append($('<img>')
					.attr('src', 'img/projects/'+topProj.project.id+'/icon.jpg')
					.attr('title', topProj.project.name/*+' (Strength: '+
						Math.round(topProj.weight*100)+'%)'*/)
				);

			projHold.append(projLink);
		}
	}

	////

	var rows = $('#section-'+group.id).children().detach();
	
	rows.sort(function(a, b) {
		return $(b).attr('data-sort')-$(a).attr('data-sort');
	});

	$('#section-'+group.id).append(rows);

	////

	var t1 = performance.now();
	console.log("buildGraph t1=%o (%o)", t1-t0, group.id);

	this._setGraphTimeout();
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._initTabs = function() {
	this._tabLinks = $('.tabs').children('a');
	this._groupSections = $('section[id^="section-"]');

	this._selectTab(this._groups[0].id);

	var me = this;

	this._tabLinks.click(function() {
		me._selectTab($(this).attr('data-group'));
	});
};

/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._selectTab = function(groupId) {
	this._groupSections.hide();
	this._tabLinks.removeClass('active');

	$('#section-'+groupId).show();
	$('#tab-'+groupId).addClass('active');
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.Pages.Tags.prototype._initMoreLinks = function() {
	var link, par, trend, pow, proj;

	$('a.more')
		.click(function() {
			link = $(this);
			par = link.parents('div.row');
			trend = par.children('.trendCol');
			pow = par.children('.powerCol');
			proj = par.children('.projCol');

			if ( trend.hasClass('open') ) {
				link.html('more <i class="fa fa-caret-down"></i>');
			}
			else {
				link.html('less <i class="fa fa-caret-up"></i>');
			}

			trend.toggleClass('open');
			pow.toggleClass('open');
			proj.toggleClass('open');
		});
};
