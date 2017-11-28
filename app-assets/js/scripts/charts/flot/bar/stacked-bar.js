/*=========================================================================================
    File Name: stacked-bar.js
    Description: Flot stacked bar chart
    ----------------------------------------------------------------------------------------
    Item Name: Crewnie Platform
    Version: 1.2
    Author: Ing. Alejandro Javier Villalón Navarro.
    Author URL: http://www.IngAjVillalon.com
==========================================================================================*/

// Stacked bar chart
// ------------------------------
$(window).on("load", function(){

    var d1 = [];
    for (var i = 0; i <= 10; i += 1) {
        d1.push([i, parseInt(Math.random() * 30)]);
    }

    var d2 = [];
    for (var i = 0; i <= 10; i += 1) {
        d2.push([i, parseInt(Math.random() * 30)]);
    }

    var d3 = [];
    for (var i = 0; i <= 10; i += 1) {
        d3.push([i, parseInt(Math.random() * 30)]);
    }

    var stack = 0,
        bars = true,
        lines = false,
        steps = false;

    function plotWithOptions() {
        $.plot("#stacked-bar", [ d1, d2, d3 ], {
            series: {
                stack: stack,
                lines: {
                    show: lines,
                    fill: true,
                    steps: steps,
                    lineWidth: 0,
                },
                bars: {
                    show: bars,
                    barWidth: 0.6,
                    lineWidth: 0,
                    fill: 1
                }
            },
            grid: {
                borderWidth: 1,
                borderColor: "#e9e9e9",
                color: '#999',
                minBorderMargin: 20,
                labelMargin: 10,
                margin: {
                    top: 8,
                    bottom: 20,
                    left: 20
                },
            },
            // colors: ['#00BCD4', '#3F51B5', '#009688']
            colors: ['#FFE57F', '#FFD740', '#FFC400']
        });
    }

    plotWithOptions();
});