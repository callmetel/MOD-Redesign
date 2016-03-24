jQuery(document).ready(function($) {
	var slide = $('.slide'),
	mSlide = $('.slide-0'),
	oSlide = $('.slide-1'),
	dSlide = $('.slide-2'),
	contactSlide = $('#slide-contact'),
	currentSlide = $('.is-current-slide')
	previousSlide = $('.slides .slide:eq(2)'),
	nextSlide = currentSlide.next(),
	mPageBtn = $('#slide-mod .slide-btn'),
	oPageBtn = $('#slide-objective .slide-btn'),
	dPageBtn = $('#slide-distinct .slide-btn');
	TweenMax.set('.letter-mask-0, .letter-mask-1, .letter-mask-2', {opacity:0});

	$("html").niceScroll();

	$(window).on('load', function(){
		previousSlide.addClass('is-previous-slide');
		nextSlide.addClass('is-next-slide');
		TweenLite.set('.is-current-slide', {x:0} );
		TweenLite.set('.is-previous-slide', {x:'-100%', y:'-100%'} );
		TweenLite.set('.is-next-slide', {x:'100%', y:'-100%'} );
		TweenLite.set('.is-last-slide', {x:'200%', y:'-100%'} );
		TweenLite.set('.slide-bg', {backgroundPosition:'5% -5%'})

	});
	$('body').bind('mousewheel keydown', function(e) {
		if(e.originalEvent.wheelDelta / 120 > 0 || e.keyCode === 38  || e.keyCode === 37) {
	       function checkSlideUp(){
	       	if(contactSlide.hasClass('is-current-slide')) {
	        	var curr = new TimelineMax(),
	        	prev = new TimelineMax(),
	        	next  = new TimelineMax();

	            TweenMax.to(
	            	'#slide-contact', 1.5, {
	            	
	     
	            		x:'100%',  ease:Power2.easeOut

	            	}
            	);
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
	        	curr.fromTo(
	        		dSlide, 1.5, {
	        			x:'-100%', y:'-200%', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		},
	        		{
	        			x:'.00001%', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		}   

	        		);
	            setTimeout(function(){
	            	$('#slide-contact').removeClass('is-current-slide').addClass('is-last-slide');
	            	dSlide.removeClass('is-previous-slide');
	            	TweenMax.set(dSlide, {className:'is-current-slide'});

	            }, 1550);
		           
		    }
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
	        if(dSlide.hasClass('is-current-slide')) {
	        	var curr = new TimelineMax(),
	        	prev = new TimelineMax(),
	        	next  = new TimelineMax();

	        	TweenMax.fromTo(
	        		'.slide-bg', 1.5, {
	        			x:'0px', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		},
	        		{
	        			backgroundPosition: '88%, -5%', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		}   

	        		);
	        	TweenMax.fromTo(
	        		'#slide-contact', 1.5, {
	        			x:'100%',y:'-300%', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		},
	        		{
	        			x:'.00001%', /* negative width of background image your animating - left top */
	        			ease: Linear.easeNone /* make sure you use Linear.easeNone so its smooth */
	        		}   

	        		);


	            curr.to(
	            	dSlide, 1.5, {
	            		x:'-100%', ease:Power2.easeOut    
	            	}
	            	);

	            setTimeout(function(){
	            	$('#slide-contact').addClass('is-current-slide').removeClass('is-last-slide');
	            	TweenMax.set(dSlide, {className:'is-previous-slide'});
	            	//dSlide.removeClass('is-current-slide');
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
	TweenMax.to('.letter-mask-0', 1.25, {opacity:1, width:'5%'});
	$('.slide-bg').addClass('make-m-only');
	$('#slide-mod .right-rectangle').addClass('is-inactive');
	$('#slide-objective, #slide-distinct').detach();
	setTimeout(function(){
		$('.slides, #slide-mod, body').addClass('is-scrollable');
		$( "#slide-mod .slide-info" ).after( "<div class=\'mPage'\></div>" );
		//$('#m-scroll').removeClass('is-inactive');
	}, 1200);
	setTimeout(function(){
		$('#m-scroll').removeClass('is-inactive');
	}, 2000);
});
oPageBtn.click(function(){
	var state = {
		"canBeAnything": true
	};
	
	history.pushState(state, "Objective", "/objective");
	$('body').unbind('mousewheel');
	$('#slide-objective .slide-info').addClass('move-off-left');
	TweenMax.to('.letter-mask-1', 1.25, {opacity:1, width:'48%'});
	$('.slide-bg').addClass('make-o-only');
//	$('#slide-mod .right-rectangle').addClass('is-inactive');
	
	setTimeout(function(){
		$('.slides, #slide-objective, body').addClass('is-scrollable');
		$( "#slide-objective .slide-info" ).after( "<div class=\'oPage'\></div>" );
		//$('#m-scroll').removeClass('is-inactive');
	}, 1200);
	setTimeout(function(){
		$('#m-scroll').removeClass('is-inactive');
	}, 2000);
	$('#slide-mod, #slide-distinct').detach();
});
dPageBtn.click(function(){
	var state = {
		"canBeAnything": true
	};
	history.pushState(state, "Distinct", "/distinct");
	$('body').unbind('mousewheel');
	$('#slide-distinct .slide-info').addClass('move-off-left');
	TweenMax.to('.letter-mask-2', 1.25, {opacity:1, width:'55%'});
	$('.slide-bg').addClass('make-d-only');
//	$('#slide-mod .right-rectangle').addClass('is-inactive');
	setTimeout(function(){
		$('.slides, #slide-distinct, body').addClass('is-scrollable');
		$( "#slide-distinct .slide-info" ).after( "<div class=\'oPage'\></div>" );
		//$('#m-scroll').removeClass('is-inactive');
	}, 1200);
	setTimeout(function(){
		$('#m-scroll').removeClass('is-inactive');
	}, 2000);
	$('#slide-mod, #slide-objective').detach();
});
});