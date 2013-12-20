sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
	$("#slider > img#1").fadeIn(500);
	$("#slider h3#2").hide();
	$("#slider h3#3").hide();
	$("#slider h3#4").hide();
	startSlider();
});

function startSlider() {
	count = $("#slider > img").size();
	
	loop = setInterval(function() {
	
		if(sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}
	
		//$(".caption").hide(5);
		//$(".caption" + sliderNext).hide(5);
		
		 $("#slider > img").css("display", "none");
		 $("#slider .carousel-caption h3").css("display", "none");
		 $("#slider .carousel-caption h3#" + sliderNext).fadeIn(500);
		 $("#slider > img#" + sliderNext).fadeIn(500);
		
		sliderInt = sliderNext
		sliderNext = sliderNext + 1;
	
	}, 7000)
}

function prev() {
	newSlide = sliderInt - 1;
	showSlide(newSlide);
}

function next() {
	newSlide = sliderInt + 1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
		stopLoop();
		if(id > count) {
			id = 1;
		} else if(id < 1) {
			id = count;
		}
	
		 $("#slider > img").css("display", "none");
		 $("#slider .carousel-caption h3").css("display", "none");
		 $("#slider .carousel-caption h3#" + sliderNext).fadeIn(500);
		 $("#slider > img#" + sliderNext).fadeIn(500);
		
		sliderInt = id
		sliderNext = id + 1;
		startSlider();
}

function accordion1() {
	$("#accordion").accordion({
		collapsible: true,
		autoHeight: true,
		active: false
	});
}

$(window).ready(function() {
	if ($("#content").height() < $(window).height()) {
		$("#content").height($(window).height());
	}
	//$(".carousel-caption").hide();
	//$(".carousel-caption").first().show();
	accordion1();
});

function goToNewPage() {
    location=document.dropdown.navigation.options[document.dropdown.navigation.selectedIndex].value
}