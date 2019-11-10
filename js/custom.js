//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});




sliderInt = 1; //slider default on load
sliderNext = 2; //next image in order
$(document).ready(myfunction);
$(window).on('resize',myfunction);


function myfunction() {
	
	$('.customslider > img#1').fadeIn(300); // load first slider on load
	$('.customslider .caption1').fadeIn(300);

    $('.nav-thumbs a:first').addClass('active'); // add active class to first dot
    startSlider();
    $('.left').click(function(){
        prev();
        $('.nav-thumbs a').removeClass('active');
    });
    $('.right').click(function(){
        next();
        $('.nav-thumbs a').removeClass('active');
    });
    $('.nav-thumbs a').click(function(){
        $('.nav-thumbs a').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('data-slide');
        showSlide(id);
    });
	var img_height = $(".customslider img").height();
	$('.customslider').css({ 'height': img_height });
	
	var count_navs = $('.nav-thumbs li').size();
	
	$( ".nav-thumbs li" ).hover(
	
	function() {
		
		for (var i=0; i<count_navs; i++){
			if ( $( this ).is( ":first-child" ) ) {
			$( this ).find('.desc').css({ 'left': '-23px' }); 
		 }else if ( $( this ).is( ":last-child" ) ) {
			 $( this ).find('.desc').css({ 'left': '30px' });
		 }else if ( $( this ).eq(i+i) ) {
			$( this ).find('.desc').css({ 'left': '3px' }); 
		 }
		}

		$( this ).find('.desc').css({ 'opacity': '1' });
		//$( this ).find('.desc').css({ 'left': '32px' });
	  }, function() {
		$( this ).find('.desc').css({ 'opacity': '0' });
	  }
	);
}

function startSlider(){
    count = $('.customslider > img').size(); 
    loop = setInterval(function(){

        if(sliderNext>count){
            sliderNext = 1; 
            sliderInt = 1; 
        }

        $('.customslider > img').fadeOut(300); // fadeout all images
		$('.customslider .img-caption').fadeOut(300);
        $('.customslider > img#'+sliderNext).fadeIn(300); // use sliderNext to calculate the next slider id
		$('.customslider .caption'+sliderNext).fadeIn(300); // use sliderNext to calculate the next slider id
		
        sliderInt = sliderNext; 
        sliderNext = sliderNext + 1; // calculate the next image
		
    }, 8000); // after milliseconds loop
}

//previous function
function prev(){
    
    newSlide = sliderInt - 1; 
    showSlide(newSlide); 

}

function next(){
    //calculate the slide which comes after the current slide
    newSlide = sliderInt + 1; 
    showSlide(newSlide); 
}

function stopLoop(){
    window.clearInterval(loop); 

}

function showSlide(id){ // id is the variable name of what we will be calling which will be passed
    stopLoop(); 

        if(id > count){
            id = 1; 
        }else if(id < 1){
            id = count; 
        }
	
        $('.customslider > img').fadeOut(300); // fadeout all images
		$('.customslider .img-caption').fadeOut(300); 
        $('.customslider > img#'+id).fadeIn(300); 
		$('.customslider .caption'+id).fadeIn(300); 
    
        $('.nav-thumbs > a#'+id).addClass('active');

        sliderInt = id; 
        sliderNext = id + 1; 
		
        startSlider(); 
}

$('.customslider > img').hover(function(){
        stopLoop(); // stops the loop when image is hovered over
},
function(){
    startSlider(); // starts where the loop left off
});
	

	

