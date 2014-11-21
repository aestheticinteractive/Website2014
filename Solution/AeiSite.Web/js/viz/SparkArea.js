
/*====================================================================================================*/
Aei.SparkArea = function(element, data) {
	this._element = element;
	this._data = data;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.SparkArea.prototype.build = function() {
	var elem = this._element;
	var data = this._data;
	var w = elem.offsetWidth;
	var h = elem.offsetHeight;
	
	var x = d3.scale.linear()
		.range([0, w])
		.domain([0, data.length-1]);
	
	var y = d3.scale.linear()
		.range([h-1, 0])
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
	
	var svg = d3.select(this._element)
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
