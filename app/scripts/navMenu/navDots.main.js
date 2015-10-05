'use strict';
define([
    'jquery',
    'd3'
], function( $, d3 ){


  var blueDots = {
    width : function () {
        return window.innerWidth < 535 ? window.innerWidth : 200;
    },
    height : function () {
        return window.innerHeight - 246
    },
    roundRand : function(max) {
            return Math.floor(Math.random() * max);
    },
    data : [],
    duration : 400,
    maxPoints : 15,
    maxSize : 10,
    maxMove : 50,

    init : function() {

        var chart = d3.select("#navDots")
            .append("svg")
            .attr({
                "width": this.width.bind(blueDots),
                "height": this.height.bind(blueDots)
            });
        
        var plot = chart.append("g")
            .attr({
                "tranform": "translate(" +
                    this.width.bind(blueDots) / 100 +
                    "," +
                    this.height.bind(blueDots) / 100 +
                    ")"
            });
        
        var colors = d3.scale.linear().domain([0,100]).range(["#1be9d6","#333333"]);        
        // var colors = d3.scale.linear().domain([0,200]).range(["#1be9d6","black"]);        
        
        var update = function(data) {

            //re compute the data join
            var points = plot.selectAll(".point")
                .data(data, (d, i) => {
                    return i;
                });

            //update existing
            points
                .transition()
                .duration(400)
                .ease("circular").attr({
                    "cx": (d) => {
                        return d.x
                    },
                    "cy": (d) => {
                        return d.y
                    },
                    "r": (d) => {
                        return d.r
                    },
                    "fill": (d, i) => {
                        return colors(Math.floor(Math.random() * 19))
                    }
                });

            //add the new points
            points.enter()
                .append("circle")
                .attr({
                    "fill": (d, i) => {
                        return colors(Math.floor(Math.random() * 19))
                    },
                    "r": 0
                })
                .transition()
                .duration(300)
                .attr({
                    "cx": (d) => {
                        return d.x
                    },
                    "cy": (d) => {
                        return d.y
                    },
                    "r": (d) => {
                        return d.r
                    },
                    "class": "point",
                    "stroke": "#050505",
                    "stroke-width": 2
                });

            //out with the old!
            points.exit().remove()
        };


        this.data.length > 0 ? this.data = [] : '';

        for (var i = 0; i < this.maxPoints; i++) {
            this.data.push({
                "x": this.roundRand(this.width()),
                "y": this.roundRand(this.height()),
                "r": this.maxSize,
            })
        };

        setInterval(() => {

            for (var i = 0; i < this.maxPoints; i++) {
                var newX = this.roundRand(this.maxMove) - this.maxMove / 2;
                var newY = this.roundRand(this.maxMove) - this.maxMove / 2;
                this.data[i] = {
                    "x": this.data[i].x + newX,
                    "y": this.data[i].y + newY,
                    "r": this.roundRand(this.maxSize),
                }
            }

            update(this.data); 

        }, this.duration);

    }
  };

  return blueDots;

});