$(document).ready(function(){
	$(".icon").click(function() {
		if ($("#myTopNav").attr("class") === "topNav"){
			$(".topNav").addClass("responsive");
		}else{
			$(".topNav.responsive").removeClass("responsive");
		}
	});

	//http://codetheory.in/change-active-state-links-sticky-navigation-scroll/
	var sections = $('.sectionHome'), nav = $('nav'), nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
  		var cur_pos = $(this).scrollTop();
 
  		sections.each(function() {
    		var top = $(this).offset().top - nav_height,
        	bottom = top + $(this).outerHeight();
        });
    });

	nav.find('a').on('click', function () {
	  	var $el = $(this), id = $el.attr('href');
	 
	  	$('html, body').animate({
	    	scrollTop: $(id).offset().top - nav_height
	    }, 500);
	});

});