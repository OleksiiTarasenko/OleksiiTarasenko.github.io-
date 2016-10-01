$(function(){
	$('#tabs-1').show();
	$link1=$('a[href^="#tabs-1"]');
	$link2=$('a[href^="#tabs-2"]');
	$link3=$('a[href^="#tabs-3"]');
	$link1.on('click', function(event) {
		$('#tabs-1').show();
		$link1.css('background','lightblue');
		$link2.css('background','grey');
		$link3.css('background','grey');
		$('#tabs-2').hide();
		$('#tabs-3').hide();
		event.preventDefault();
	});
	$link2.on('click', function(event) {
		$('#tabs-1').hide();
		$('#tabs-2').show();
		$link2.css('background','lightblue');
		$link1.css('background','grey');
		$link3.css('background','grey');
		$('#tabs-3').hide();
		event.preventDefault();
	});
	$link3.on('click', function(event) {
		$('#tabs-1').hide();
		$('#tabs-2').hide();
		$('#tabs-3').show();
		$link3.css('background','lightblue');
		$link2.css('background','grey');
		$link1.css('background','grey');
		event.preventDefault();
	});
	$( '#firstname' ).hover(function() {
  $('.help--firstname').show();
   $('.help--lastname').hide();
    $('.help--address').hide();
		});
  $( '#lastname' ).hover(function() {
  $('.help--lastname').show();
  $('.help--firstname').hide();
  $('.help--address').hide();
	});
  $('#address').hover(function() {
  	$('.help--address').show();
  	$('.help--firstname').hide();
   $('.help--lastname').hide();
  });
  $('#submit').on('click', function(){
  	$('.help--firstname').show();
    $('.help--lastname').show();
    $('.help--address').show();
  });
});

