$(document).ready(function() {
	
	//declare variables
	
	var $bigLogo = $('#big-logo'),
		$nav = $('.fixed-nav'),
		$storeHeader = $('#store'),
		$produHeader = $('#productions'),
		$studioHeader = $('#studio'),
		tl = new TimelineLite();

	tl.add( TweenLite.from($bigLogo, 1, {alpha:0}) );
	tl.add( TweenLite.to($bigLogo, 1, {alpha:0}), "+=.75" );
	tl.add( TweenLite.from($storeHeader, .75, {alpha:0}) );
	tl.add( TweenLite.from($produHeader, .75, {alpha:0}), "-=.15" );
	tl.add( TweenLite.from($studioHeader, .75, {alpha:0}), "-=.15" );
	tl.add( TweenLite.from($nav, .75, {alpha:0, y:600}), "-=.15" );



});