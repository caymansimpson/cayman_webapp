import React from 'react';
import './Home.css';
import '../App';
import { Link } from "react-router-dom"
import xkcd from '../assets/correlation.png';
import "d3"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {'progress': null};
  }

  render() {
    return (
      <div>
        <div className="mainIntro">
          <p>Warning: There's not really anything substantial on this particular Page. If you're here to learn about me
            professionally, you should visit the <Link to='/projects'><span className="bold">{"Projects "}</span></Link>
            page for some more detailed understanding of what has interested me, or the
            <Link to='/about'><span className="bold">{" About"}</span></Link> page to learn some more about my interests
            {" (though not really helpful over "}
            <a className="bold" href="https://www.linkedin.com/cayman-simpson" target="_blank">{"LinkedIn"}</a> {" )."}
          </p>
          <p>
            All you'll learn from this website is that I'm a huge nerd and I feel a weird need to be productive on plane rides.
          </p>
        </div>
        <div className="boxlayout">
          <div id="attempt">
            this is a project
          </div>
          <div>
            this is another project
          </div>
          <div>
            this is a third project
          </div>
          <div>
            <p>I would be remiss without sharing one of my favorite comics:</p>
            <img src={xkcd}/>
          </div>
        </div>
      </div>
    )
  }
}

class SVG extends React.Component {
  constructor(props) {
    super(props)
  }

  /* ---------------------------------------- appendPieChart(filename, div, width, height) ----------------------------------------
  * Appends pie charts to the passed in div from the filename parameter. Creates a pie chart for each data column, using
  * the specified width and height parameters as a total Bounding Box for all charts. */
  /*appendPieChart(data, div, width, height, title) {

  	// Because of unknown scope problems dealing with ajax requests, this helps solve it.
  	var w = width - 10;
  	var h = height;

  	var animationDuration = 750;
  	var alldata = []; // Need to keep all the data present otherwise the pie chart's events will use last pie chart's data

    var dataset = data.slice(0, 0)
    var headers = data.slice(1)

		// Create a function that maps values to angles. This one makes uniform angles for the initial state of the transition.
		var pie = d3.layout.pie()
			.sort(null)
			.value(function(d) {
				return 1;
			});

		// Update dataset to include initial state of transition.
		dataset = pie(dataset);

		// Unknown scope problems. This solves it. Note to self: ask a Javascript Guru
		width = (width || w)/(headers.length - 1) - 10;
		height = height || h;

		// Specify color scheme -- Adjustable; I use D3's default
		var colors = d3.scale.category20();

		// Create a pie chart for each column of data that isn't the first (categories)
		for(var m = 1; m < headers.length; m++) {

			// Specify the radii of the pie chart. As the outer and inner radius aren't radius & 0, respectively, this is a donut chart
			var radius = Math.min(width, height) / 2 - 20;
			var outerradius = radius - 20;
			var innerradius = 3/5*radius;


			// Specify what a D3 arc is
			var arc = d3.svg.arc()
			.startAngle(function(d){ return d.startAngle; })
		    .endAngle(function(d){ return d.endAngle; })
				.outerRadius(outerradius)
				.innerRadius(innerradius);


			// Create the actua D3 SVG element/pie chart
			var svg = d3.select("#" + div.id).append("svg")
				.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("transform", "translate(" + width/2 + "," + height/2 + ")");


			// The center SVG element on which I append the middle text
			var center = svg.append("svg:g")
			    .attr("class", "center_group")
			    .attr("transform", "translate(" + 0 + "," + 0 + ")");


			// A SVG Element group consisting of the labels for the pie chart
			var labels = svg.append("svg:g")
				.attr("class", "label_group")
				.attr("transform", "translate(" + 0 + "," + 0 + ")");


			// Find a total of the dataset to create percentages
			var total = 0;
			for(var i = 0; i  < dataset.length; i++) total += dataset[i].data[m];


			// Append the Off-White circle behind labels
			var whiteCircle = center.append("svg:circle")
				.attr("fill", "#efefef")
				.attr("r", innerradius);


			// Center "Total" Label
			var totalLabel = center.append("svg:text")
			.attr("class", "pietotallabel")
			.attr("dy", -15)
			.attr("text-anchor", "middle") // text-align: right
			.text("Total " + headers[m])


			// Total value that's initially 0, and animates to the total
			// NOTE: only works for the last pie chart (/column) currently.
			//			Have to change framework to add this functionality.

			var totalValue = center.append("svg:text")
			.attr("class", "pienumlabel")
			.attr("dy", 7)
			.attr("text-anchor", "middle") // text-align: right
			if(m == headers.length - 1) totalValue.text("0"); // animation on last one
			else totalValue.text(total);

			// Create all the initial SVG arc paths
			var path = svg.datum(dataset).selectAll("path")
				.data(pie)
				.enter().append("path")
				.attr("fill", function(d, i) {
					return colors(i);
				})
				.attr("title", m + "," + total)
				.attr("d", arc)
				.each(function(d) {
					this._current = d;
				}); // store the initial angles

			// Change the value function for the Pie Chart D3 so that
		    pie.value(function(d) {
		    	return d.data[m];
		    });


			path = path.data(pie); // compute the new angles
			path.transition().duration(animationDuration).attrTween("d", function(a) {
				var i = d3.interpolate(this._current, a);
				this._current = i(0);
				return function(time) {
					totalValue.text(Math.round(time*total)); // This is the animation that updates the middle text (only functional for the last pie chart)
					return arc(i(time)); // Transition that changes arcs to new computed angles
				};
	 		}); // redraw the arcs

		  data = pie(dataset) // so I can access old angles and new angles (based on the new value function)

			var lines = labels.selectAll("line")
				.data(data.filter(function(d) {
					return (d.value/total >= .02); // filter all labels/lines less then .02
				})).enter()
				.append("svg:line")
					.attr("x1", 0)
					.attr("x2", 0)
					.attr("y1", -outerradius-3) // HARDCODED -- length of lines
					.attr("y2", -outerradius-8)
					.attr("stroke", "gray")
					.attr("transform", function(d, i) { //start the lines uniformly around the circle
						return "rotate(" + (360/data.length/2 + i/data.length * 360) + ")";
					})
					.transition() //rotates the lines to correct position
						.duration(animationDuration)
						.attr("transform", function(d) {
							return "rotate(" + (d.startAngle+d.endAngle)/2 * (180/Math.PI) + ")";
						});

	    	// Drawing labels based on the data values
			var valueLabels = labels.selectAll("text.value")
				.data(data.filter(function(d) {
					return (d.value/total >= .02); // filter all labels less then .02
				}))
				.enter()
				.append("svg:text")
				.attr("class", "outerlabel")
				.attr("transform", function(d, i, a) {
					var radians = Math.PI - (d.data.endAngle + d.data.startAngle)/2 - Math.PI/2;

					// Unnecessary - I initialize them in the transition function
					return "translate(" + (outerradius+14)*Math.cos(radians) + "," + -1*(outerradius+14)*Math.sin(radians) + ")";
				})
				.attr("dy", function(d){
					if ((d.startAngle+d.endAngle)/2 > Math.PI/2 && (d.startAngle+d.endAngle)/2 < Math.PI*1.5 ) return 5; // HARDCODED - Just experimentally, this works well
					else return -7;
				})
				.attr("text-anchor", function(d){
					if ((d.startAngle+d.endAngle)/2 < Math.PI ) return "start"; // Where to position the labels -- if they're on the left side of the pie chart or the right
					else return "end";
				})
				.text(function(d) {
					return d.data.data[0] + ": " + Math.round(d.value*100/total) + "%"; // The actual text for the labels
				})
				.transition()
					.duration(animationDuration)
					.attrTween("transform", function(d, i) {

						var a = (d.data.endAngle + d.data.startAngle)/2 - Math.PI/2; // the starting radians for the lines
						var b = (d.startAngle + d.endAngle)/2 - Math.PI/2; // the ending radians for the lines

						var interpolate = d3.interpolateNumber(a, b); // a function that calculates the intermediate distances between teh lines
						return function(time) {
							var val = interpolate(time); // gradually change the positions
							return "translate(" + Math.cos(val) * (outerradius+14) + "," + Math.sin(val) * (outerradius+14) + ")";
						};
					});

			alldata.push(data); // store all the data so that the events correspond to each respective pie chart rather than the last one.


			// Create the mousevents/tooltips for each of the arcs in the pie charts
			path.on("mouseover", function(d,i) {
				console.log("SVG was moused over!")
        console.log(d, i, this)
			})
  	}
  }*/

  render() {
    var data = [
      ["Date", "Sold", "Leftover"]
      ["2/3", 80, 50],
      ["2/4", 70, 70],
      ["2/5", 81, 59],
      ["2/5", 89, 56],
      ["2/5", 49, 101],
    ];

    this.appendPieChart(data, document.getElementById('attempt'), 100, 100)

    return (
      <div/>
    )
  }
}

export default Home;
