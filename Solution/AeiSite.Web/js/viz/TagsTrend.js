
/*====================================================================================================*/
Aei.TagsTrend = function(containerId, data) {
	this._containerId = containerId;
	this._data = data;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrend.prototype.build = function() {
	var data = this._data;
	var w = 80;
	var h = 30;
	
	var x = d3.scale.linear()
		.range([0, w])
		.domain([0, data.length]);
	
	var y = d3.scale.linear()
		.range([h, 0])
		.domain([0, 1]);
	
	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom');

	var area = d3.svg.area()
		.interpolate('basis')
		.x(function(d, i) { return x(i); })
		.y0(h)
		.y1(function(d) { return y(d); });
		
	var line = d3.svg.line()
		.interpolate('basis')
		.x(function(d, i) { return x(i); })
		.y(function(d) { return y(d); });
	
	var svg = d3.select(this._containerId)
		.append('svg')
			.attr('width', w)
			.attr('height', h);
	
	svg.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate(0,'+h+')')
		.call(xAxis);
	
	svg.append('path')
		.datum(data)
		.attr('class', 'area')
		.attr('d', area);
		
	svg.append('path')
		.datum(data)
		.attr('class', 'line')
		.attr('d', line);
};
