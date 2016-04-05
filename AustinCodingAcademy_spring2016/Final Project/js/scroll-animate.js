$(document).ready(function(){
  
    $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 610) {
            
            $('.my_sandwich').addClass('animated flip');
            
        }
        
    });

  $(window).scroll(function() {
        
        var verticalScroll = $(this).scrollTop();
        
        if(verticalScroll > 1074) {
            
            $('#my_1').addClass('animated fadeInDownBig');
            $('#my_1').removeClass('.hide_me');
            
            $('#my_2').addClass('animated fadeInUpBig');
            $('#my_1').removeClass('animated fadeInDownBig');
            
            $('#my_3').addClass('animated fadeInLeftBig');
            $('#my_1').removeClass('animated fadeInDownBig');
            
            $('#my_4').addClass('animated fadeInRightBig');
            $('#my_1').removeClass('animated fadeInDownBig');
            
        }
        
    });
});