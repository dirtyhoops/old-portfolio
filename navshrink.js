$(window).scroll(function() {
	if($(document).scrollTop() > 50) {
		$('nav').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
});

$(document).ready(function(){
	$("#link0").click(function(){
        $path=$("#homediv").offset().top;
        $('html, body').animate({scrollTop:$path},850);
   });
   $("#link1").click(function(){
        $path=$("#aboutdiv").offset().top;
        $('html, body').animate({scrollTop:$path},850);
   });
   $("#link2").click(function(){
        $path=$("#educationdiv").offset().top;
        $('html, body').animate({scrollTop:$path},850);
   });
   $("#link3").click(function(){
        $path=$("#projectdiv").offset().top;
        $('html, body').animate({scrollTop:$path},850);
   });
   $("#link4").click(function(){
        $path=$("#skillsdiv").offset().top;
        $('html, body').animate({scrollTop:$path},850);
   });
   $("#link5").click(function(){
        $path=$("#homediv").offset().top;
        $('html, body').animate({scrollTop:$path},850);
   });
   $("#link6").click(function(){
        $path=$("#contactdiv").offset().top;
        $('html, body').animate({scrollTop:$path},850);
   });

});



// for navigation bar when it's mobile size
$(document).ready(function() {
	$(".menu-icon").on("click", function() {
		$("nav ul").toggleClass("showing");
	});
});

$(document).ready(function() {
  $("ul li a").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// scrolling effect for nav bar
$(window).on("scroll", function() {
	if($(window).scrollTop() > 20) {
		$('nav').addClass('black');
	} else {
		$('nav').removeClass('black');
	}
})

