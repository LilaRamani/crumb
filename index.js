$(document).ready(function (){
	$("#merchButton").click(function (){
	    $('html, body').animate({
	        scrollTop: $("#merch").offset().top
	    }, 2000);
	});

	$("#showButton").click(function (){
	    $('html, body').animate({
	        scrollTop: $("#tour").offset().top
	    }, 2000);
	});

	$("#contactButton").click(function (){
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 2000);
	});
});