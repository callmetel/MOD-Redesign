$(document).ready(function() {
	// Draw SVG Animation

var $j = $('.st0'),
	$g = $('.st1'),
  $p = $('.st3'),
	$container = $('#site-intro-container'),
	time = 1;

var tl = new TimelineLite();
var tl2 = new TimelineMax();

	  // Draw Logo
      
      tl.fromTo($j, time, {drawSVG:"0% 0%"}, {drawSVG:"0% 100% " });
      tl.from($g, time, {drawSVG:0},'-=.65');
      tl.from($p, time, {drawSVG:0},'-=.5');
      tl.to($p, time, {drawSVG:0}, "+=1");
      tl.to($g, time, {drawSVG:0},'-=.65');
      tl.fromTo($j, time, {drawSVG:"0% 100% " }, {drawSVG:"0% 0%"},'-=.5');
      tl.to($container, 2, {alpha:0},'-=.85');

      tl2.staggerFromTo($('path'), 3, {stroke:"#D70400"}, {stroke:"#FFFFFF"}, 0.25);
      tl2.staggerFromTo($('path'), 2, {stroke:"#FFFFFF"},{stroke:"#D70400"}, -0.25, "-=1");
  

    setTimeout(function () {
    $container.hide();
}, 6000);

});