$(document).ready(function(){

	$('a').click(function(e){
		if($(this).attr('href')=='#')
		{
			e.preventDefault();
		}
	});


	$(".carousel-caption").click(function(event){
		event.preventDefault();
		var url = $(this).attr('href').split('#');
		if(url.length==2){
			$('html,body').animate({scrollTop: $("#"+url[1]).offset().top - $('header').height() },'slow');
		}else{
			window.location = $(this).attr('href');
		}
	});
});