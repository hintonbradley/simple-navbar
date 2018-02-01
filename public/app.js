$(document).ready(function(){
	$('.menu').click(function(){
		console.log('i am clicked')
		$('.links-wrapper').toggleClass('active');
	});
	$('section').click(function(){
		if($( '.links-wrapper' ).hasClass( 'active' )) {
			$('.links-wrapper').removeClass('active')
		}
	});
})