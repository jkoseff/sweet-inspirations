$(function() {
	$( "#accordion" ).accordion({
		collapsible: true,
		autoHeight: true,
		active: false
	});
});

//$(document).ready(function() {
	//$("#next").on("click", function() {
		//var currentActiveImage = $(".carousel-slide-active");
		//var nextActiveImage = currentActiveImage.next();
		
		//if (nextActiveImage).length == 0) {
			//nextActiveImage = $(".carousel-inner img").first();
		//}
		
		//currentActiveImage.removeClass("carousel-slide-active").addClass("carousel-slide").css("z-index", -10);
		//nextActiveImage.addClass("carousel-slide-active").removeClass("carousel-slide").css("z-index", 20);
		//$(".carousel-inner img").not([currentActiveImage, nextActiveImage]).css("z-index", 5);
		
	//});
//});

//$('.carousel-slide').cycle({ 
    //fx:     'scrollHorz', 
   // speed:  'slow', 
    //timeout: 5000, 
    //next:   '#next', 
    //prev:   '#prev' 
//});

function goToNewPage() {
    location=document.dropdown.navigation.options[document.dropdown.navigation.selectedIndex].value
}