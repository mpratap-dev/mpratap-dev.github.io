$(function(){
	$('#home').trigger('focus');
	$('#home').click(function(){
		$('.mg-section').fadeOut();
		$('.m1').removeClass('socialMax');
		$('.landing-section').fadeIn();
	});
	$('#about').click(function(){
		$('.mg-section').fadeOut();
		$('.mg-section').hide();
		$('.m1').removeClass('socialMax');
		$('.about-content').fadeIn();
	});
	$('#contact').click(function(){
		var side = $('.m1');
		console.log(side);
		side.addClass('socialMax');
	});
});

