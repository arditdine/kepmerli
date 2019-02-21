 var scrolled=0;

$(document).ready(function(){

        
    $("#downClick").on("click" ,function(){
                scrolled=scrolled+1000;
        
                $("body").animate({
                        scrollTop:  scrolled
                   });

            });
			
			
	$("form").submit(function( event ) {
		
		$.post("/mod/call/contact_form", $(this).serialize(), function (data) {
			console.log(data);
				/*if(data.message == "Send"){
					$("form").remove();
				}else{
					console.log("Error sending message");
				}*/
            });
		
		event.preventDefault();
	});
			
			
			

    
   


});





function _animateIntro(css_class) {
	var introSection = $(css_class),
		introSectionHeight = introSection.height(),
		//change scaleSpeed if you want to change the speed of the scale effect
		scaleSpeed = 1,
		//change opacitySpeed if you want to change the speed of opacity reduction effect
		opacitySpeed = 0.6; 
	
	//update this value if you change this breakpoint in the style.css file (or _layout.scss if you use SASS)
	var MQ = 1170;

	triggerAnimation();
	$(window).on('resize', function(){
		triggerAnimation();
	});

	//bind the scale event to window scroll if window width > $MQ (unbind it otherwise)
	function triggerAnimation(){
		if($(window).width()>= MQ) {
			$(window).on('scroll', function(){
				//The window.requestAnimationFrame() method tells the browser that you wish to perform an animation- the browser can optimize it so animations will be smoother
				window.requestAnimationFrame(animateIntro);
			});
		} else {
			$(window).off('scroll');
		}
	}
	//assign a scale transformation to the introSection element and reduce its opacity
	function animateIntro () {
		var scrollPercentage = ($(window).scrollTop()/introSectionHeight).toFixed(5),
			scaleValue = 1 + scrollPercentage*scaleSpeed;
		//check if the introSection is still visible
		if( $(window).scrollTop() < introSectionHeight) {
			introSection.css({
			    '-moz-transform': 'scale(' + scaleValue + ') translateZ(0)',
			    '-webkit-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-ms-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'-o-transform': 'scale(' + scaleValue + ') translateZ(0)',
				'transform': 'scale(' + scaleValue + ') translateZ(0)',
				'opacity': 1 - scrollPercentage*opacitySpeed,

			});
		}
	}
}

jQuery(window).load(function($){
    _animateIntro('.header-effect');
    _animateIntro('.fade-on-scroll');
});

