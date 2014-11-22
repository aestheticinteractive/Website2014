
/*====================================================================================================*/
Aei.App = {};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.App.init = function() {
	this._bg = new Aei.Background('background');
	$(document).foundation();
};

/*----------------------------------------------------------------------------------------------------*/
Aei.App.getTagTrends = function() {
	if ( !Aei.App._TrendData ) {
		Aei.App._TrendData = new Aei.TagTrends(2005, 6, 90);
		Aei.App._TrendData.init();
	}

	return Aei.App._TrendData;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.App.getTagItemCalculations = function(group, trendData) {
	var calcs = [];
	var valuesLen = 0;
	var recentCount = 0;
	var maxTopProj = 8;
	var i, j, item, values, recentMax, calc, viPow, val;

	for ( i in group.items ) {
		item = group.items[i];
		values = trendData.getTrendValues(group.id, item.id, 0.25);
		valuesLen = values.length;
		recentCount = 0;
		
		calc = {
			group: group,
			item: item,
			values: values,
			topUses: trendData.getTopProjects(group.id, item.id, maxTopProj),
			recentSum: 0,
			recent: 0,
			peak: 0
		};

		while ( calc.topUses.length < maxTopProj ) {
			calc.topUses.push({});
		}
		
		calcs.push(calc);
	}
	
	for ( i = 0 ; i < valuesLen ; ++i ) {
		viPow = Math.pow(i, 1.4);
		recentCount += viPow;
		recentMax = 0;
		
		for ( j in calcs ) {
			calc = calcs[j];
			val = calc.values[i];
			calc.recentSum += val*viPow;
			recentMax = Math.max(recentMax, calc.recentSum);
		}
		
		for ( j in calcs ) {
			calc = calcs[j];
			calc.recent = (recentMax ? calc.recentSum/recentMax : 0);
			calc.peak = Math.max(calc.peak, calc.recent);
		}
	}
	
	for ( i in calcs ) {
		calc = calcs[i];
		calc.recentSum = null;
	}
	
	calcs.sort(function(a, b) {
		return b.recent-a.recent;
	});

	return calcs;
};




////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.App.initProjectGallery = function(gallery) {
	var imagePack = new ImagePack();
	imagePack.setPadding(1);
	imagePack.setMinBounds(320, 3.5);
	imagePack.setMaxBounds(1200, 7.5);

	var imgList = gallery.children('a').children('img');
	var imageCount = imgList.length;
	var images = [];
	var loadCount = 0;
	var visible = false;
	
	gallery
		.css('opacity', 0)
		.magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled:true
			}
		});
	
	var onImageLoad = function(image) {
		var index = image.attr('data-index');
		images[index] = image;

		image
			.show()
			.css('opacity', 1)
			.attr('data-w', image.width())
			.attr('data-h', image.height());

		if ( !visible && ++loadCount > Math.min(2, imageCount) ) {
			gallery.css('opacity', 1);
			visible = true;
		}

		if ( visible ) {
			updateLayout();
		}
	};
	
	var updateLayout = function() {
		var w = gallery.width()-1;
		imagePack.setWidth(w);
		imagePack.updateLayout(images);
	};
	
	imgList.load(function(a) {
		onImageLoad($(a.target));
	});

	window.onresize = function() {
		updateLayout();
	};
};
