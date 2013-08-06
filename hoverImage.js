$(".imgHover").hover(function(){
	$(this).children("img").fadeTo(200, 0.25)
		   .end().children(".hover").show();
}, function() { 
	$(this).children("img").fadeTo(200, 1)
	       .end().children(".hover").hide();
});