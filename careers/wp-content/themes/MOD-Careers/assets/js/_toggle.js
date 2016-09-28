$(document).ready(function($) {

    var $play = $('.play-container'),
        $initHeight = 144; // Initial height

        $play.each(function() {
        $.data(this, "realHeight", $(this).height());    // Create new property realHeight
    }).css({ overflow: "hidden", height: $initHeight + 'px' });

        
        $('.plus-sign').on("click", function() {

            if ($(this).data('clicked', true)) {

                $(this).closest('li').animate({ height: '100vh' }, 600);
                $(this).attr("src","http://jgp.wp:8888/wp-content/uploads/2015/12/Ei-minus.svg");
                $(this).toggleClass('open');

                $('.open').on("click", function() {

                    if (($(this).data('clicked', true)).hasClass('open')) {

                        $(this).closest('li').animate({ height: $initHeight}, 600);
                        $(this).attr("src","http://jgp.wp:8888/wp-content/uploads/2015/12/add121.svg");
                    } 
                });

            } 
        });


    });