$(function(){
   
   $(window).bind('scroll', function(e){
        parallaxEffect();
   });
   
   $("#linkEarth").on('click', function(){
       $('body').animate({scrollTop: 0}, 1000);
       //parent.location.hash = "home";
       return false;
   });
   
   $("#linkMoon").on('click', function(){
       $('body').animate({scrollTop: $('#moon').offset().top }, 1000);
       //parent.location.hash = "moon";
       return false;
   });
   
   $("#linkRocket").on('click', function(){
       $('body').animate({scrollTop: $('#flight').offset().top }, 1000);
       //parent.location.hash = "flight";
       return false;
   });
   
   $("#linkPlanets").on('click', function(){
       $('body').animate({scrollTop: $('#planets').offset().top }, 1000);
       //parent.location.hash = "planets";
       return false;
   });
   
});

function parallaxEffect(){
    
    var scrollPosition = $(window).scrollTop();
    $("#stars").css('top', '-'+scrollPosition*.2+"px");
    $("#images").css('top', '-'+scrollPosition*.5+"px");
    
}