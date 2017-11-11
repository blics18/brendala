$(document).ready(function(){
	$(".icon").click(function() {
		if ($("#myTopNav").attr("class") === "topNav"){
			$(".topNav").addClass("responsive");
			
		}else{
			$(".topNav.responsive").removeClass("responsive");
		}
	});


});