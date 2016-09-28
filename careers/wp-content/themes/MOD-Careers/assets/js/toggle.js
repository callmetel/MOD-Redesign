$(document).ready(function() {
    
    var $play = $('.play-container'),
        $switch = $('.plus-sign'),
        $initHeight = 144; // Initial height
    

    $switch.slideToggle("slow", function() {
          $play.css('height','100%');
          $switch.attr("src","http://jgp.wp:8888/wp-content/uploads/2015/12/Ei-minus.svg");
          
        });
});