
/*====================================================================================================*/
Aei.TagsTrend = function(containerId, data) {
	this._containerId = containerId;
	this._data = data;
};


////////////////////////////////////////////////////////////////////////////////////////////////////////
/*----------------------------------------------------------------------------------------------------*/
Aei.TagsTrend.prototype.build = function() {
	var data = this._data;
	
	var margin = {top: 20, right: 80, bottom: 30, left: 50},
	    width = 960 - margin.left - margin.right,
	    height = 500 - margin.top - margin.bottom;
	
	var x = d3.scale.linear()
	    .range([0, width]);
	
	var y = d3.scale.linear()
	    .range([height, 0]);
	
	var color = d3.scale.category10();
	
	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");
	
	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left");
	
	var line = d3.svg.line()
	    .interpolate("basis")
	    .x(function(d, i) { return x(i); })
	    .y(function(d) { return y(d); });
	
	var svg = d3.select(this._containerId).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
	  //color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));
	
	  /*data.forEach(function(d) {
	    d.date = parseDate(d.date);
	  });*/
	
	  /*var cities = color.domain().map(function(name) {
	    return {
	      name: name,
	      values: data.map(function(d) {
	        return {date: d.date, temperature: +d[name]};
	      })
	    };
	  });*/
	
	  x.domain([0, data[0].values.length]);
	
	  y.domain([
	    d3.min(data, function(d) { return d3.min(d.values); }),
	    d3.max(data, function(d) { return d3.max(d.values); })
	  ]);
	
	  svg.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);
	
	  svg.append("g")
	      .attr("class", "y axis")
	      .call(yAxis)
	    .append("text")
	      .attr("transform", "rotate(-90)")
	      .attr("y", 6)
	      .attr("dy", ".71em")
	      .style("text-anchor", "end")
	      .text("Testing123");
	
	  var row = svg.selectAll(".row")
	      .data(data)
	    .enter().append("g")
	      .attr("class", "row");
	
	  row.append("path")
	      .attr("class", "line")
	      .attr("d", function(d) { return line(d.values); });
	      //.style("stroke", function(d) { return color(d.title); });
	
	  row.append("text")
	     // .datum(function(d) { return {name: d.title, value: d.values[d.values.length - 1]}; })
	      .attr("transform", function(d) { 
	      		var lastI = d.values.length-1;
	      		return "translate(" + x(lastI) + "," + y(d.values[lastI]) + ")";
	      	})
	      .attr("x", 3)
	      .attr("dy", ".35em")
	      .text(function(d) { return d.title; });
};
