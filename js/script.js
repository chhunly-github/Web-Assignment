$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 4500
    });
    $(window).scroll(function(){
      if($(this).scrollTop()>100){
        $("#scrolltop").fadeIn(300);  
      }
      else{
        $("#scrolltop").fadeOut(300); 
      }
    });
    $("#scrolltop img").click(function(){
      $(window).scrollTop(0); 
    });
});