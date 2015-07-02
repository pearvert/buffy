<script>
var data = [{"x":534.720996869109,"y":188.402300350323,"label":"ATP","size":5},
{"x":526.793135268385,"y":494.495864118909,"label":"PK","size":10},
{"x":539.854817710164,"y":332.435549874068,"label":"rpoA","size":10},
{"x":528.357841173126,"y":236.960433131191,"label":"rpoB","size":10}]

var width = 1000,height = 1000;

var x = d3.scale.linear()
       .domain([0, 1000])
       .range([0, width]);

var y = d3.scale.linear()
    .domain([0, 1000])
    .range([0, height]);

var svgContainer = d3.select("body")
.append("svg:svg")
.attr("width", width)
.attr("height",height);

//text
var text = svgContainer.append("text")
    .attr("x", 800)
    .attr("y", 100)
    .text('')
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("fill","black");

//circles
var nodesGroup = svgContainer.append("g");

var nodes = nodesGroup.selectAll("circle")
.data(data)
.enter()
.append("svg:circle");

var nodeattr = nodes
.attr("cy", function(d,i){return y(d.y);  })
.attr("cx", function(d,i){return x(d.x); }) 
.on("click", function(d){d3.select("text").text(d.label);})
.attr("r", function(d,i){return d.size;});
</script>