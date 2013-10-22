$(document).ready(function($) {
		if(typeof jQuery!=='undefined'){
	    console.log('jQuery Loaded');
	}
	else{
	    console.log('not loaded yet');
	}

	// slow fill on banner
	$banner = $('<div>').css({
	    background: 'rgba(171, 189, 82, 1)',
	    position: 'absolute',
	    width: '7.8em',
	    height: '0',
	    top: '0',
	    opacity: '.7'
	}).appendTo('.first-banner').delay(300).animate({opacity: '.7', height: '100%'},1000, function(){
	    $('#first-banner').fadeIn();
	});

	$banner2 = $('<div>').css({
		background: 'rgba(171, 189, 82, 1)',
		position: 'absolute',
		width: '11em',
		height: '0',
		top: '0',
		opacity: '.7'
	}).appendTo('.second-banner').delay(1000).animate({opacity: '.7', height: '100%'}, 1000, function(){
		$('#second-banner').fadeIn();
	})

	$banner3 = $('<div>').css({
		background: 'rgba(171, 189, 82, 1)',
		position: 'absolute', 
		width: '11.3em',
	    height: '0',
	    top: '0',
	    opacity: '.7'
	}).appendTo('.third-banner').delay(1700).animate({opacity: '.7', height: '100%'}, 1000, function(){
		$('#third-banner').fadeIn();
	})

	

});








