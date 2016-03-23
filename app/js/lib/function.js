jQuery(document).ready(function($) {
	var slide = $('.slide'),
	mSlide = $('.slide-0'),
	oSlide = $('.slide-1'),
	dSlide = $('.slide-2'),
	currentSlide = $('.is-current-slide')
	previousSlide = $('.slides .slide:eq(2)'),
	nextSlide = currentSlide.next(),
	mPageBtn = $('#slide-mod .slide-btn'),
	oPageBtn = $('#slide-objective .slide-btn'),
	dPageBtn = $('#slide-distinct .slide-btn');

	$("html").niceScroll();
	
	$(window).on('load', function(){
		previousSlide.addClass('is-previous-slide');
		nextSlide.addClass('is-next-slide');
		TweenLite.set('.is-current-slide', {x:0} );
		TweenLite.set('.is-previous-slide', {x:'-100%', y:'-100%'} );
		TweenLite.set('.is-next-slide', {x:'100%', y:'-100%'} );
		TweenLite.set('.slide-bg', {backgroundPosition:'5% -5%'})

	});
	$('body').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / 120 > 0) {
	       function checkSlideUp(){

	       	if(mSlide.hasClass('is-current-slide')) {

	       	}
	       	if(oSlide.hasClass('is-current-slide')) {
	       		var curr = new TimelineMax(),
	       		prev = new TimelineMax(),
	       		next  = new TimelineMax();

	       		TweenMax.set(
	            	'.rectangles', {
	            		opacity:0    
	            	}
	            );
	       		TweenMax.fromTo(
	       			'.slide-bg', 1.5, {
	       				x:'0px', /* negative width of background image your animating - left top */
	       				ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	       			},
	       			{
	       				backgroundPosition: '5%, -5%', /* negative width of background image your animating - left top */
	       				ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	       			}
	       			);

	       		curr.to(
	       			oSlide, 1.5, {
	       				x:'100%', ease:Power2.easeOut   
	       			}
	       			);

	       		prev.fromTo(
	       			mSlide, 1.5, {
	       				x:'-100%', ease:Power2.easeOut  
	       			},
	       			{
	       				x:'.00001%', ease:Power2.easeOut    
	       			}
	       			);

	       		next.fromTo(
	       			dSlide, 1.5, {
	       				x:'100%', ease:Power2.easeOut   
	       			},
	       			{
	       				x:'100%', ease:Power2.easeOut   
	       			}
	       			);

	       		setTimeout(function(){
	       			curr.set(oSlide, {className:"is-next-slide"});
	       			prev.set(dSlide, {className:"is-previous-slide"});
	       			next.set(mSlide, {className:"is-current-slide"});
	       			TweenMax.to(
		            	'.rectangles', .65,{
		            		opacity:1    
		            	}
	            	);
	       		}, 1550);
	       	}
	       	if(dSlide.hasClass('is-current-slide')) {
	       		var curr = new TimelineMax(),
	       		prev = new TimelineMax(),
	       		next  = new TimelineMax();

	       		// TweenMax.set(
	         //    	'.rectangles', {
	         //    		opacity:0    
	         //    	}
	         //    );
	       		TweenMax.fromTo(
	       			'.slide-bg', 1.5, {
	       				x:'0px', /* negative width of background image your animating - left top */
	       				ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	       			},
	       			{
	       				backgroundPosition: '50%, -5%', /* negative width of background image your animating - left top */
	       				ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	       			}
	       			);
	       		

	       		curr.to(
	       			dSlide, 1.5, {
	       				x:'100%', ease:Power2.easeOut   
	       			}
	       			);

	       		prev.fromTo(
	       			oSlide, 1.5, {
	       				x:'-100%', ease:Power2.easeOut  
	       			},
	       			{
	       				x:'.00001%', ease:Power2.easeOut    
	       			}
	       			);

	       		next.fromTo(
	       			mSlide, 1.5, {
	       				x:'100%', ease:Power2.easeOut   
	       			},
	       			{
	       				x:'100%', ease:Power2.easeOut   
	       			}
	       			);

	       		setTimeout(function(){
	       			curr.set(dSlide, {className:"is-next-slide", y:'-100%'});
	       			prev.set(mSlide, {className:"is-previous-slide"});
	       			next.set(oSlide, {className:"is-current-slide"});
	       			TweenMax.to(
		            	'.rectangles', .65,{
		            		opacity:1    
		            	}
	            	);
	       		}, 1550);
	       	}
	       }
	       checkSlideUp();

	   } else {
	      //alert('down');
	      if(mSlide.hasClass('is-current-slide')) {
	      	var curr = new TimelineMax(),
	      	prev = new TimelineMax(),
	      	next  = new TimelineMax();

	      	curr.to(
	      		mSlide, 1.5, {
	      			x:'-100%', ease:Power2.easeOut  
	      		}
	      		);

	            prev.fromTo(
	            	dSlide, 1.5, {
	            		x:'100%', ease:Power2.easeOut   
	            	},
	            	{
	            		x:'.00001%', ease:Power2.easeOut    
	            	}
	            	);
	            TweenMax.fromTo(
	            	'.slide-bg', 1.5, {
	            		x:'0px', /* negative width of background image your animating - left top */
	            		ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	            	},
	            	{
	            		backgroundPosition: '50%, -5%', /* negative width of background image your animating - left top */
	            		ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	            	}   
	            	);
	            // TweenMax.set(
	            // 	'.rectangles', {
	            // 		opacity:0    
	            // 	}
	            // );



	            next.to(
	            	oSlide, 1.5, {
	            		x:'-.00001%', ease:Power2.easeOut   
	            	}
	            	);
	            setTimeout(function(){
	            	curr.set(mSlide, {className:"is-previous-slide"});
	            	prev.set(oSlide, {className:"is-current-slide"});
	            	next.set(dSlide, {className:"is-next-slide", y:'-100%'});
	            // 	TweenMax.to(
		           //  	'.rectangles', .65,{
		           //  		opacity:1    
		           //  	}
	            // 	);
	            }, 1550);
	        }

	        if(oSlide.hasClass('is-current-slide')) {
	        	var curr = new TimelineMax(),
	        	prev = new TimelineMax(),
	        	next  = new TimelineMax();

	        	// TweenMax.set(
	         //    	'.rectangles', {
	         //    		opacity:0    
	         //    	}
	         //    	);
	        	TweenMax.fromTo(
	        		'.slide-bg', 1.5, {
	        			x:'0px', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		},
	        		{
	        			backgroundPosition: '68%, -5%', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		}   

	        		);
	        	curr.to(
	        		oSlide, 1.5, {
	        			x:'-100%', ease:Power2.easeOut  
	        		}
	        		);

	            prev.fromTo(
	            	dSlide, 1.5, {
	            		x:'100%', y:'-200%', ease:Power2.easeOut    
	            	},
	            	{
	            		x:'.00001%', ease:Power2.easeOut    
	            	}
	            	);

	            next.fromTo(
	            	mSlide, 1.5, {
	            		x:'100%', ease:Power2.easeOut   
	            	},
	            	{
	            		x:'100%', ease:Power2.easeOut   
	            	}
	            	);

	            setTimeout(function(){
	            	curr.set(oSlide, {className:"is-previous-slide"});
	            	prev.set(dSlide, {className:"is-current-slide"});
	            	next.set(mSlide, {className:"is-next-slide"});
	       //      	TweenMax.to(
		      //       	'.rectangles', .65,{
		      //       		opacity:1    
		      //       	}
	    			// );
	            }, 1550);
	        }
	    }
	});
mPageBtn.click(function(){
	var state = {
		"canBeAnything": true
	};
	history.pushState(state, "Misfits", "/misfits");
	$('body').unbind('mousewheel');
	$('#slide-mod .slide-info').addClass('move-off-left');
	$('.slide-bg').addClass('make-m-only');
	$('#slide-mod .right-rectangle').addClass('is-inactive');

	setTimeout(function(){
		$('.slides, #slide-mod, body').addClass('is-scrollable');
		$( "#slide-mod .slide-info" ).after( "<div class=\'mPage'\></div>" );
		//$('#m-scroll').removeClass('is-inactive');
	}, 1200);
	setTimeout(function(){
		$('#m-scroll').removeClass('is-inactive');
	}, 2000);
});
});