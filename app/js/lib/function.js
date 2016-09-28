jQuery(document).ready(function($) {
	

	//Declaring Global Variables
	
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
			dPageBtn = $('#slide-distinct .slide-btn'),
			mod = $('.slide-bg'),
			pagesContainer = $('.pages-container'),
			mPage = $('.mPage'),
			oPage = $('.oPage'),
			dPage = $('.dPage'),
			mDetach = mPage.detach(),
			oDetach = oPage.detach(),
			dDetach = dPage.detach(),
			mask0 = $('.letter-mask-0'),
			mask1 = $('.letter-mask-1'),
			mask2 = $('.letter-mask-2');
			TweenMax.set('.letter-mask-1, .letter-mask-2', {opacity:0});
			TweenMax.set('.progress span', {scaleX:0});


	//Improve site speed by prerendering pages in the head of the html

		var relPreRender = document.createElement ("link"),
			relPreRenderPage = 'mod.preview:8888/careers/'
			relPreRender.setAttribute("rel", "prerender");
			relPreRender.setAttribute("href",relPreRenderPage);
			document.getElementsByTagName("head")[0].appendChild(relPreRender);

	
	// Load video src and image source 
	
		$(window).load(function(){
			if (window.matchMedia("(max-width: 1024px)").matches){
				$('#video_background').detach();
				$('#img_background').css('backgroundImage', 'url(\'app/images/mod-backgroundhome.jpg\')');
			}
			else if (window.matchMedia("(min-width: 1025px)").matches){
				$('#img_background').detach();
			}
		});

	// Nav Toggle Animation 
		
		$('#trigger, #burger, .nav-logo, .close').click(function(){
			$('#menu, .close').toggleClass('nav-is-inactive');
			$('.slide-info').toggleClass('is-hidden');
		});

	
	//The variables below are given to each slide movement depending on the screen size
	


			var xForward = '100%',
				xBackward = "-100%",
				xCurrent = ".0001%",
				xNCurrent = ".0001%",
				yUp1 = "-100%",
				yUp2 = "-200%",
				yUp3 = "-300%",
				zero = "0%";


			if (window.matchMedia("(max-device-width: 667px)").matches){
				
				document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
				TweenLite.set('.slide-bg', {backgroundPosition:'46% 85%'});
				var  cTd = '-58.75%', 
					 dTo = '-30.25%',	  
					 oTm = '0%',	    
					 cdTc = '0%',	  
					 dTc = '-95%',	  
					 oTd = '-58.75%',	  
					 mTo = '-30.25%',
					 mOnly = '-5%',
					 oOnly = '-24.75%',
					 dOnly = '-42.28%',
					 altEase = Linear.easeNone,
					 altEaseOut = Linear.easeNone;



			} else if (window.matchMedia("(max-width: 980px)").matches){
				
				document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
				TweenLite.set('.slide-bg', {backgroundPosition:'50% 75%'});
				var  cTd = '-58.75%', 
					 dTo = '-30.25%',	  
					 oTm = '0%',	    
					 cdTc = '0%',	  
					 dTc = '-95%',	  
					 oTd = '-58.75%',	  
					 mTo = '-30.25%',
					 mOnly = '-5%',
					 oOnly = '-24.75%',
					 dOnly = '-42.28%',
					 altEase = Linear.easeNone,
					 altEaseOut = Linear.easeNone;



			} else if (window.matchMedia("(max-width: 1024px)").matches){


				document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });
				TweenLite.set('.slide-bg', {backgroundPosition:'-80% 35%'});
				var  cTd = '-37.68%', 
					 dTo = '-19.05%',	  
					 oTm = '0%',	    
					 cdTc = '0%',	  
					 dTc = '-90%',	  
					 oTd = '-37.68%',	  
					 mTo = '-19.05%',
					 mOnly = '-5%',
					 oOnly = '-24.25%',
					 dOnly = '-42.28%',
					 altEase = Linear.easeNone,
					 altEaseOut = Linear.easeNone,
					 contactBg = '#img_background';


			} else if ($(window).width() >= 1025 && $(window).width() <= 1279){
	
				TweenLite.set(mod, {backgroundPosition:'-1% -5%'});
				var  cTd = '-32%', 
					 dTo = '-21%',	  
					 oTm = '0%',	    
					 cdTc = '0%',	  
					 dTc = '-60%',	  
					 oTd = '-32%',	  
					 mTo = '-21%',
					 mOnly = '-5.75%',
					 oOnly = '-21.35%',
					 dOnly = '-36.51%',
					 altEase = Sine.easeInOut,
					 altEaseOut = Sine.easeOut,
					 contactBg = '#video_background';

			} else if ($(window).width() >= 1280 && $(window).width() <= 1366){
	
				TweenLite.set(mod, {backgroundPosition:'-10% 51%'});
				var  cTd = '-35.449%', 
					 dTo = '-18.25%',	  
					 oTm = '0%',	    
					 cdTc = '0%',	  
					 dTc = '-85.89%',	  
					 oTd = '-35.449%',	  
					 mTo = '-18.25%',
					 mOnly = '-5.75%',
					 oOnly = '-21.35%',
					 dOnly = '-36.51%',
					 altEase = Sine.easeInOut,
					 altEaseOut = Sine.easeOut,
					 contactBg = '#video_background';

			}
			else if ($(window).width() >= 1367 && $(window).width() <= 1599){
	
				TweenLite.set(mod, {backgroundPosition:'-14% 51%'});
				var  cTd = '-35.175%', 
					 dTo = '-18.85%',	  
					 oTm = '0%',	    
					 cdTc = '0%',	  
					 dTc = '-87%',	  
					 oTd = '-35.175%',	  
					 mTo = '-18.85%',
					 mOnly = '-7.45%',
					 oOnly = '-25.65%',
					 dOnly = '-36.51%',
					 altEase = Sine.easeInOut,
					 altEaseOut = Sine.easeOut,
					 contactBg = '#video_background';

			} else if(window.matchMedia("(min-width: 1600px)").matches){
				$('#img_background').attr('src','');
				TweenLite.set(mod, {backgroundPosition:'3% 50%'});
				var  cTd = '-35%', 
					 dTo = '-17.5%',	  
					 oTm = '0%',	    
					 cdTc = '0%',	  
					 dTc = '-83%',	  
					 oTd = '-35%',	  
					 mTo = '-17.5%',
					 mOnly = '-8.1%',
					 oOnly = '-25%',
					 dOnly = '-40.51%',
					 altEase = Sine.easeInOut, 
					 altEaseOut = Sine.easeOut,
					 contactBg = '#video_background';
			}
	

	//Ease the scrolling on all page links
		
		$(window).resize(function(){
			if ($(window).width() >= 768){
				  $(function() {
				    $('a[href*=#]:not([href=#])').on('click', (function() { //get the 'a' anchor with a # but not ones with only a #
				        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) { //is the location of the pathname & hostname = to this pathname & hostname?
				          var target = $(this.hash); //get the link; section id
				          target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); //is the target length = to target? if not slice the target length down to 1
				          if (target.length) {
				            $('html,body').animate({
				              scrollTop: target.offset().top
				            }, 1000);
				            return false;
				          }
				        }
				    }));
				});
			}
		});

	
	//Set Slides to proper positions
	
		$(window).on('load', function(){
			previousSlide.addClass('is-previous-slide');
			nextSlide.addClass('is-next-slide');
			TweenLite.set('.is-current-slide', {x:0} );
			TweenLite.set('.is-previous-slide', {x:'-100%', y:'-100%'} );
			TweenLite.set('.is-next-slide', {x:'100%', y:'-100%'} );
			TweenLite.set('.is-last-slide', {x:'200%', y:'-100%'} );
			mPage.detach();
			oPage.detach();
			dPage.detach();

	//Scroll & Key Navigation Function
	
		// Check Slide Up Function
			
			function checkSlideUp(){

		       	//if a user slides up while on the M slide do this
			
		       	if(mSlide.hasClass('is-current-slide')) {

		       	}


		       	//if a user slides up while on the Contact slide do this

		       	if(contactSlide.hasClass('is-current-slide')) {

		       		//Background Letters Animation
	       				
	       				TweenMax.to(
			            	mod, .25, {
			            		className:"-=nobg"   
			            	}
			            );
	       				TweenMax.to(
			        		mod, 2.25, {
			        			x:cTd, /* negative width of background image your animating - left top */
			        			ease: altEaseOut /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		'.letter-mask-0, .letter-mask-1, .letter-mask-2', .01, {
			        			opacity:0
			        		}  
			        	);
			        	TweenMax.to(
			        		contactBg, 1.5, {
			        			opacity:1, /* negative width of background image your animating - left top */
			        			ease: altEase /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		contactSlide, 2, {
			        			x:xForward, /* negative width of background image your animating - left top */
			        			ease: altEaseOut /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	


		        	//Slide Content Animation
		        	
			        	var curr = new TimelineMax(),
			        		prev = new TimelineMax(),
			        		next  = new TimelineMax();

			        	curr.fromTo(
			        		dSlide, 2, {
			        			x: xBackward, y:'-200%', /* negative width of background image your animating - left top */
			        			ease: altEaseOut /* make sure you use Linear.easeNone so its smooth */
			        		},
			        		{
			        			x: xCurrent, /* negative width of background image your animating - left top */
			        			ease: altEaseOut /* make sure you use Linear.easeNone so its smooth */
			        		}   

			        	);
			        	prev.to(
			        		mask2, 2, {
			        			opacity:1
			        		}, "+=2"  
			        	);
						TweenMax.set(
							'#slide-distinct .slide-info', {
								alpha:0
							}
						);

						curr.fromTo(
							'#slide-distinct .slide-info', 2, {
								alpha:0,
								y:'100px'
							},{
								alpha: 1,
								y:0
							},"-=.5"
						);


			            

			        // Assign proper classes to slides
			        
			            setTimeout(function(){
			            	contactSlide.removeClass('is-current-slide').addClass('is-last-slide');
			            	dSlide.removeClass('is-previous-slide');
			            	TweenMax.set(dSlide, {className:'is-current-slide'});
			            	TweenMax.set(
				        		contactSlide, {
				        			y: yUp1, /* negative width of background image your animating - left top */
				        			ease: altEaseOut /* make sure you use Linear.easeNone so its smooth */
				        		}  
				        	);
				        	$('#page-4').removeClass('is-current-page');
			            	$('#page-3').addClass('is-current-page').removeClass('is-previous-page');
			            }, 1550);
			           
			    }


				//if a user slides up while on the O slide do this

		       	if(oSlide.hasClass('is-current-slide')) {
        	
		       		//Background Letters Animation
		       		
			        	TweenMax.to(
			        		mod, 1.5, {
			        			x:oTm, /* negative width of background image your animating - left top */
			        			ease: altEaseOut /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		'.letter-mask-0, .letter-mask-1, .letter-mask-2', .01, {
			        			opacity:0
			        		}  
			        	);
			        	
		        	//Slide Content Animation
		        	
			       		var curr = new TimelineMax(),
			       			prev = new TimelineMax(),
			       			next  = new TimelineMax();

			       		curr.to(
			       			oSlide, 1.5, {
			       				alpha:0, 
			       				marginTop:'100px', 
			       				ease: altEaseOut   
			       			}
			       		);
			       		curr.to(
			        		mask0, .1, {
			        			opacity:1
			        		},"-=1"
			        	);


			       		prev.fromTo(
			       			mSlide, 1.5, {
			       				x:xBackward, ease:altEaseOut  
			       			},
			       			{
			       				x:xCurrent, ease:altEaseOut   
			       			}
			       		);

			       		next.fromTo(
			       			dSlide, 1.5, {
			       				x:xForward, ease:altEaseOut  
			       			},
			       			{
			       				x:xForward, ease:altEaseOut 
			       			}
			       		);

						prev.fromTo(
							'#slide-mod .slide-info', 1.5, {
								alpha:0,
								marginTop:'100px'
							},{
								alpha: 1,
								marginTop:0
							}
						);



			       	// Assign proper classes to slides
			        
			       		setTimeout(function(){
			       			curr.set(oSlide, {className:"is-next-slide"});
			       			prev.set(dSlide, {className:"is-previous-slide"});
			       			next.set(mSlide, {className:"is-current-slide"});
			       			TweenMax.set('#page-3', {className:"is-previous-page"});
					    	TweenMax.set('#page-1', {className:"is-current-page"});
					    	TweenMax.set('#page-2', {className:"is-next-page"});
			       		}, 1550);
		       	}


				//if a user slides up while on the D slide do this

		       	if(dSlide.hasClass('is-current-slide')) {	

		       		//Background Letters Animation
		       		
			        	TweenMax.to(
			        		mod, 1.5, {
			        			x:dTo, /* negative width of background image your animating - left top */
			        			ease: altEaseOut /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		'.letter-mask-0, .letter-mask-1, .letter-mask-2', .01, {
			        			opacity:0
			        		}  
			        	);
			        	

		        	//Slide Content Animation
		        	
			       		var curr = new TimelineMax(),
			       			prev = new TimelineMax(),
			       			next  = new TimelineMax();

			       		curr.to(
			       			dSlide, 1, {
			       				alpha:0, 
			       				marginTop:'100px', 
			       				ease:altEaseOut   
			       			}
			       		);


			       		prev.fromTo(
			       			oSlide, 1.5, {
			       				x:xBackward, ease: altEaseOut  
			       			},
			       			{
			       				alpha:1, x:xCurrent, ease: altEaseOut    
			       			}
			       		);
			       		prev.to(
			        		mask1, 1.5, {
			        			opacity:1
			        		} 
			        	);

			       		next.fromTo(
			       			mSlide, 1.5, {
			       				x:xForward, ease: altEaseOut   
			       			},
			       			{
			       				x:xForward, ease: altEaseOut   
			       			}
			       		);

			       		TweenMax.set(
							'#slide-objective .slide-info', {
								alpha:0
							}
						);

						next.fromTo(
							'#slide-objective .slide-info', 1.5, {
								alpha:0,
								marginTop:'100px'
							},{
								alpha: 1,
								marginTop:0
							}
						);



			       	// Assign proper classes to slides
			        
			       		setTimeout(function(){
			       			curr.set(dSlide, {className:"is-next-slide", y:'-100%', marginTop:0});
			       			prev.set(mSlide, {className:"is-previous-slide", marginTop:0});
			       			next.set(oSlide, {className:"is-current-slide", marginTop:0});
			       			TweenMax.set('#page-1', {className:"is-previous-page"});
					    	TweenMax.set('#page-2', {className:"is-current-page"});
					    	TweenMax.set('#page-3', {className:"is-next-page"});

			       		}, 1550);
		       	}

		    }
			       
		// Check Slide Down Function
		
			function checkSlideDown(){

	      		//if a user slides down while on the M slide do this
	      		
				if(mSlide.hasClass('is-current-slide') || $('#page-1').hasClass('is-current-slide')) {
					
					//Background Letters Animation
	       		
			        	TweenMax.to(
			        		mod, 1.5, {
			        			x:mTo, /* negative width of background image your animating - left top */
			        			ease: altEase /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		'.letter-mask-0, .letter-mask-1, .letter-mask-2', .01, {
			        			opacity:0
			        		}  
			        	);
			        	

		        	//Slide Content Animation
		        	
						var curr = new TimelineMax(),
							prev = new TimelineMax(),
							next  = new TimelineMax();

						curr.to(
							mSlide, 1.5, {
							  x:xBackward, ease:altEase  
							}
						);
						curr.to(
			        		mask1, 1.5, {
			        			opacity:1
			        		}  
			        	);
					    prev.fromTo(
					    	dSlide, 1.5, {
					    		x:xForward, ease:altEase   
					    	},
					    	{
					    		alpha:0, x:xCurrent, ease:altEase    
					    	}
					    );

					    //o slide is now current
					    next.to(
					    	oSlide, .5, {
					    		marginTop:'0px',
					    		alpha:1, x:xNCurrent, ease:altEase  
					    	}
					    );
						TweenMax.set(
							'#slide-objective .slide-info', {
								alpha:0
							}
						);

						next.set(
							'#slide-objective .slide-info', {
								alpha:0,
								marginTop:0
							}
						);
						next.fromTo(
							'#slide-objective .slide-info', 1.5, {
								alpha:0,
								marginTop:'100px'
							},{
								alpha: 1,
								marginTop:0
							}
						);

			

					// Assign proper classes to slides
		        
					    setTimeout(function(){
					    	curr.set(mSlide, {className:"is-previous-slide"});
					    	prev.set(oSlide, {className:"is-current-slide"});
					    	next.set(dSlide, {className:"is-next-slide", y:'-100%'});
					    	TweenMax.set('#page-1', {className:"is-previous-page"});
					    	TweenMax.set('#page-2', {className:"is-current-page"});
					    	TweenMax.set('#page-3', {className:"is-next-page"});
					    }, 1550);
				}


				//if a user slides down while on the O slide do this
				
		        if(oSlide.hasClass('is-current-slide') || $('#page-2').hasClass('is-current-slide')) {

					//Background Letters Animation
	       		
			        	TweenMax.to(
			        		mod, 1.5, {
			        			x:oTd, /* negative width of background image your animating - left top */
			        			ease: altEase /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		'.letter-mask-0, .letter-mask-1, .letter-mask-2', .01, {
			        			opacity:0
			        		}  
			        	);


		        	//Slide Content Animation
		        	
			        	var curr = new TimelineMax(),
			        		prev = new TimelineMax(),
			        		next  = new TimelineMax();

			        	curr.to(
			        		oSlide, 1.5, {
			        			alpha:0, 
		       					y:200,
		       					ease:altEase  
			        		}
			        	);

			        	curr.set(
			        		oSlide, { 
		       					y:0
			        		}
			        	);
			        	curr.to(
			        		mask2, 1.5, {
			        			opacity:1
			        		}
			        	);

			            prev.fromTo(
			            	dSlide, .5, {
			            		x:xForward, y:yUp2, ease:altEase    
			            	},
			            	{
			            		alpha: 1, x:xCurrent    
			            	}
			            );


			            next.fromTo(
			            	mSlide, 1.5, {
			            		x:xForward   
			            	},
			            	{
			            		x:xForward   
			            	}
			            );

			           TweenMax.set(
							'#slide-distinct .slide-info', {
								alpha:0
							}
						);

						next.fromTo(
							'#slide-distinct .slide-info', 1.5, {
								alpha:0,
								marginTop:'100px'
							},{
								alpha: 1,
								marginTop:0
							}
						);



			        // Assign proper classes to slides
		        
			            setTimeout(function(){
			            	curr.set(oSlide, {className:"is-previous-slide"});
			            	prev.set(dSlide, {className:"is-current-slide"});
			            	next.set(mSlide, {className:"is-next-slide"});
			            	TweenMax.set('#page-2', {className:"is-previous-page"});
			            	TweenMax.set('#page-3', {className:"is-current-page"});
			            	TweenMax.set('#page-1', {className:"is-next-page"});
			            }, 1550);
		        }


			    //if a user slides down while on the D slide do this
			    
		        if(dSlide.hasClass('is-current-slide') || $('#page-3').hasClass('is-current-slide')) {

					//Background Letters Animation
	       				
	       				TweenMax.set(
			        		contactSlide, {
			        			x:xForward,
			        			y:yUp3, /* negative width of background image your animating - left top */
			        			ease: altEase /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
	       				TweenMax.to(
			        		mod, 2, {
			        			x:dTc, /* negative width of background image your animating - left top */
			        			ease: altEase /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		contactSlide, 2, {
			        			x:cdTc, /* negative width of background image your animating - left top */
			        			ease: altEase /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);
			        	TweenMax.to(
			        		contactBg, 1.5, {
			        			opacity:.25, /* negative width of background image your animating - left top */
			        			ease: altEase /* make sure you use Linear.easeNone so its smooth */
			        		}  
			        	);

			        	TweenMax.to(
			        		'.letter-mask-0, .letter-mask-1, .letter-mask-2', .01, {
			        			opacity:0
			        		}  
			        	);



		        	//Slide Content Animation
			        	
			        	var curr = new TimelineMax(),
			        		prev = new TimelineMax(),
			        		next  = new TimelineMax();

			            curr.to(
			            	dSlide, 2.25, {
			            		x:xBackward, ease: altEase   
			            	}
			            );
			            curr.to(
			            	mod, .5, {
			            		className:"+=nobg"   
			            	}
			            );

			            TweenMax.set(
							'#slide-contact .slide-info', {
								alpha:0
							}
						);

						next.fromTo(
							'#slide-contact .slide-info', 2, {
								alpha:0,
								marginTop:'100px'
							},{
								alpha: 1,
								marginTop:0
							},"+=2.1"
						);

					
					// Assign proper classes to slides

			            setTimeout(function(){
			            	contactSlide.addClass('is-current-slide').removeClass('is-last-slide');
			            	TweenMax.set(dSlide, {className:'is-previous-slide'});
			            	$('#page-4').addClass('is-current-page');
			            	$('#page-3').removeClass('is-current-page').addClass('is-previous-page');
			            }, 1550);

		        }


		       	//if a user slides down while on the Contact slide do this
			
		       	if(contactSlide.hasClass('is-current-slide')) {

		       	}

	    	} 
			var hammertime = new Hammer( $( "body" )[ 0 ], {
			      domEvents: false
			    } );

			hammertime.on('swipeleft swipedown', function(e){
				checkSlideDown();

			});
			hammertime.on('swiperight swipeup', function(e){
				checkSlideUp();

			});

			$('#page-indicators').click(function(){
				if( $('#page-2').data('clicked', true) && $('#slide-mod').hasClass('current-slide') ){
					alert('it works');
					checkSlideDown();
				} else if( $('#page-2').data('clicked', true) && ($('#slide-distinct').hasClass('current-slide') || $('#slide-contact').hasClass('current-slide')) ){
					checkSlideUp();
				} else if( $('#page-2').data('clicked', true) && $('#slide-objective').hasClass('current-slide') ){
					//do nothing
				} else if( $('#page-3').data('clicked', true) && ($('#slide-mod').hasClass('current-slide') || $('#slide-objective').hasClass('current-slide')) ){
					checkSlideDown();
				} else if( $('#page-3').data('clicked', true) && $('#slide-contact').hasClass('current-slide') ){
					checkSlideUp();
				} else if( $('#page-3').data('clicked', true) && $('#slide-distinct').hasClass('current-slide') ){
					//do nothing
				} else if( $('#page-4').data('clicked', true) && ($('#slide-objective').hasClass('current-slide') || $('#slide-distinct').hasClass('current-slide') || $('#slide-mod').hasClass('current-slide')) ){
					checkSlideDown();
				} else if( $('#page-4').data('clicked', true) && $('#slide-contact').hasClass('current-slide') ){
					//do nothing
				}

			});
			var status = 0;

		if(pagesContainer.hasClass('is-not-in-use') && $(window).width() >= 1025){

			// Stop Scroll / Key Backup

			$('body').bind('mousewheel keydown swipe', function(e) {

					if (status === 0) {
						
						if(e.originalEvent.wheelDelta / 120 > 0 || e.keyCode === 38  || e.keyCode === 37 || $('body').hasClass('swiped-left') ) {

							status = 1;
							checkSlideUp();

							setTimeout(function(){
								// alert('times up!');
								status=0;
							},3000);

						} else if(e.originalEvent.wheelDelta / 120 < 0 || e.keyCode === 40  || e.keyCode === 39 ){

							status=1;
							checkSlideDown();
							setTimeout(function(){
								// alert('times up!');
								status=0;
							},3000);

						} else {

						}

					} else if (status > 0){
						//do nothing
						console.log('waiting');
					}

			});

		}
			
});


	
	//Page Function after the down button on a slide is pressed
	
		mPageBtn.click(function(){
			var state = {
				"canBeAnything": true
			};
			history.pushState(state, "Essence", "/essence");
			$('body').unbind('mousewheel keydown');
			pagesContainer.html(mDetach);
			pagesContainer.addClass('is-in-use').removeClass('is-not-in-use');
			$('#slide-objective, #slide-distinct, #slide-contact').detach();
			
			$('#slide-mod .slide-info').addClass('move-off-left');
			$('#page-indicators').addClass('move-off-right');

			mask0.addClass('single-letter-mask-0');
			TweenMax.to('.single-letter-mask-0', 1.25, {opacity:1, width:'48%'});
			TweenMax.to('.slide-bg', 1, {x: mOnly});
			TweenMax.from('.mPage h1.page-title', .85, {y:100, alpha:0, ease:Power1.EaseOut},"+=.75");
			TweenMax.set('.mPage .sec-02', {zIndex:-1, y:'100%'});
			TweenMax.set('.mPage footer', {zIndex:-1, y:'100%'});
			TweenMax.set('.mPage .page-scroll .bar', {y:'100%'});
			TweenMax.set('.mPage .scroll', {opacity:0});
			TweenMax.to('.mPage .page-scroll .bar', .85, {y:'0%', delay:1});
			TweenMax.to('.mPage .scroll', 1, {opacity:1, delay:1.5});

			console.log($('.mPage .sec-02').offset().top);

			$('.mPage .play-btn').click(function(){
				$('.mPage .video-section')[0].play();
				TweenMax.to('.mPage .play-btn', 1.5, {alpha:0});
			});
			$('.mPage .back-to-top').click(function(){
				TweenMax.to('.mPage .sec-03', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut});
				TweenMax.to('.mPage .sec-02', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut},"+=.45");
				TweenMax.to('.mPage .sec-01', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut},"+=1.45");
				
				
				setTimeout(function(){
					$('.mPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
					$('.mPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					$('.mPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
				}, 1250);
			});
				$('body').bind('mousewheel keydown', function(event) {
					if(pagesContainer.hasClass('is-in-use') && $('.mPage .sec-01').hasClass('is-current-section') ){
						if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37) ) {
							
							setTimeout(function(){

								$('.mPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.mPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								$('.mPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								
							
							}, 1250);

						} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
							TweenMax.to('.mPage .sec-01', 1, {y: '-100%', zIndex:-1, ease:Power2.easeOut});
							TweenMax.to('.mPage .sec-02', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut});
							

							setTimeout(function(){

								$('.mPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								$('.mPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.mPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								
							
							}, 1250);

						}
					} else if(pagesContainer.hasClass('is-in-use') && $('.mPage .sec-02').hasClass('is-current-section')){
						if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37) ) {
							TweenMax.to('.mPage .sec-01', 1, {y: '0%', zIndex:8000});
							TweenMax.to('.mPage .sec-02', 1, {y: '100%', zIndex:-1});

							setTimeout(function(){

								$('.mPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.mPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								$('.mPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								
							
							}, 1250);
						
						} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
							TweenMax.to('.mPage .sec-02', 1, {y: '-100%', zIndex:-1, ease:Power2.easeOut});
							TweenMax.to('.mPage .sec-03', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut});
							

							setTimeout(function(){

								$('.mPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								$('.mPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								$('.mPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								
							
							}, 1250);

						}
					} else if(pagesContainer.hasClass('is-in-use') && $('.mPage .sec-03').hasClass('is-current-section')){
						if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37)) {
							TweenMax.to('.mPage .sec-02', 1, {y: '0%', zIndex:8000});
							TweenMax.to('.mPage .sec-03', 1, {y: '100%', zIndex:-1});

							setTimeout(function(){
								$('.mPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								$('.mPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.mPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							}, 1250);
						
						} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
							

							setTimeout(function(){

								
								
							
							}, 1500);

						}
					}
				});
			
		});
		oPageBtn.click(function(){
			var state = {
				"canBeAnything": true
			};
			history.pushState(state, "About", "/about");
			$('body').unbind('mousewheel keydown');
			pagesContainer.html(oDetach);
			pagesContainer.addClass('is-in-use').removeClass('is-not-in-use');
			$('#slide-mod, #slide-distinct, #slide-contact').detach();

			$('#slide-objective .slide-info').addClass('move-off-left');
			$('#page-indicators').addClass('move-off-right');

			mask1.addClass('single-letter-mask-1');
			TweenMax.to('.single-letter-mask-1', 1.25, {opacity:1, width:'48%'});
			TweenMax.to('.slide-bg', 1, {x: oOnly});
			TweenMax.from('.oPage h1.page-title', .85, {y:100, alpha:0, ease:Power1.EaseOut},"+=.75");
			TweenMax.set('.oPage .sec-02', {zIndex:-1, y:'100%'});
			TweenMax.set('.oPage .sec-03', {zIndex:-1, y:'100%'});
			TweenMax.set('.oPage .sec-04', {zIndex:-1, y:'100%'});
			TweenMax.set('.oPage footer', {zIndex:-1, y:'100%'});
			TweenMax.set('.oPage .page-scroll .bar', {y:'100%'});
			TweenMax.set('.oPage .scroll', {opacity:0});
			TweenMax.to('.oPage .page-scroll .bar', .85, {y:'0%', delay:1});
			TweenMax.to('.oPage .scroll', 1, {opacity:1, delay:1.5});
			

			$('.oPage .back-to-top').click(function(){
				TweenMax.set(mod, {alpha:1});
				TweenMax.set('.letter-mask-1', {alpha:1});
				TweenMax.to('.oPage .sec-05', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut});
				TweenMax.to('.oPage .sec-04', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut});
				TweenMax.to('.oPage .sec-03', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut});
				TweenMax.to('.oPage .sec-02', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut},"+=.45");
				TweenMax.to('.oPage .sec-01', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut},"+=1.45");
				
				
				setTimeout(function(){
					$('.oPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
					$('.oPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
				}, 1250);
			});

			$('body').bind('mousewheel keydown', function(event) {
				if(pagesContainer.hasClass('is-in-use') && $('.oPage .sec-01').hasClass('is-current-section') ){
					if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37) ) {
						
						setTimeout(function(){

							$('.oPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							
						
						}, 1250);

					} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
						TweenMax.to('.oPage .sec-01', 1, {y: '-100%', zIndex:-1, ease:Power2.easeOut});
						TweenMax.to('.oPage .sec-02', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut});
						

						setTimeout(function(){

							$('.oPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							
						
						}, 1250);

					}
				} else if(pagesContainer.hasClass('is-in-use') && $('.oPage .sec-02').hasClass('is-current-section')){
					if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37) ) {
						TweenMax.to('.oPage .sec-01', 1, {y: '0%', zIndex:8000});
						TweenMax.to('.oPage .sec-02', 1, {y: '100%', zIndex:-1});

						setTimeout(function(){

							$('.oPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							
						
						}, 1250);
					
					} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
						TweenMax.to('.oPage .sec-02', 1, {y: '-100%', zIndex:-1, ease:Power2.easeOut});
						TweenMax.to('.oPage .sec-03', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut});
						TweenMax.set(mod, {alpha:0});
						TweenMax.set('.letter-mask-1', {alpha:0});

						setTimeout(function(){

							$('.oPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-04').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							
						
						}, 1250);

					}
				} else if(pagesContainer.hasClass('is-in-use') && $('.oPage .sec-03').hasClass('is-current-section')){
					if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37)) {
						TweenMax.to('.oPage .sec-02', 1, {y: '0%', zIndex:8000});
						TweenMax.to('.oPage .sec-03', 1, {y: '100%', zIndex:-1});
						TweenMax.set(mod, {alpha:1});
						TweenMax.set('.letter-mask-1', {alpha:1});

						setTimeout(function(){
							$('.oPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 1250);
					
					} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
						
						TweenMax.to('.oPage .sec-04', 1, {y: '0%', zIndex:8000});
						TweenMax.to('.oPage .sec-03', 1, {y: '-100%', zIndex:-1});

						setTimeout(function(){

							
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-04').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-05').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
							
						
						}, 1250);

					}
				} else if(pagesContainer.hasClass('is-in-use') && $('.oPage .sec-04').hasClass('is-current-section')){
					if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37)) {
						TweenMax.to('.oPage .sec-03', 1, {y: '0%', zIndex:8000});
						TweenMax.to('.oPage .sec-04', 1, {y: '100%', zIndex:-1});

						setTimeout(function(){
							$('.oPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-04').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 1250);
					
					} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
						
						TweenMax.to('.oPage .sec-05', 1, {y: '0%', zIndex:8000});
						TweenMax.to('.oPage .sec-04', 1, {y: '-100%', zIndex:-1});

						setTimeout(function(){

							
							$('.oPage .sec-04').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-05').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							
						
						}, 1250);

					}
				} else if(pagesContainer.hasClass('is-in-use') && $('.oPage .sec-05').hasClass('is-current-section')){
					if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37)) {
						TweenMax.to('.oPage .sec-04', 1, {y: '0%', zIndex:8000});
						TweenMax.to('.oPage .sec-05', 1, {y: '100%', zIndex:-1});

						setTimeout(function(){
							$('.oPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
							$('.oPage .sec-04').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
							$('.oPage .sec-05').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
						}, 1250);
					
					} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){

					}
				}

			});
				
		});
		dPageBtn.click(function(){
			var state = {
				"canBeAnything": true
			};
			history.pushState(state, "Culture", "/culture");
			$('body').unbind('mousewheel keydown');
			pagesContainer.html(dDetach);
			pagesContainer.addClass('is-in-use').removeClass('is-not-in-use');
			$('#slide-mod, #slide-objective, #slide-contact').detach();

			$('#slide-distinct .slide-info').addClass('move-off-left');
			$('#page-indicators').addClass('move-off-right');

			mask2.addClass('single-letter-mask-2');
			TweenMax.to('.single-letter-mask-2', 1.25, {opacity:1, width:'48%'});
			TweenMax.to('.slide-bg', 1, {x: dOnly});
			TweenMax.from('.dPage h1.page-title', .85, {y:100, alpha:0, ease:Power1.EaseOut},"+=.75");
			TweenMax.set('.dPage .sec-02', {zIndex:-1, y:'100%'});
			TweenMax.set('.dPage .sec-03', {zIndex:-1, y:'100%'});
			TweenMax.set('.dPage .page-scroll .bar', {y:'100%'});
			TweenMax.set('.dPage .scroll', {opacity:0});
			TweenMax.to('.dPage .page-scroll .bar', .85, {y:'0%', delay:1});
			TweenMax.to('.dPage .scroll', 1, {opacity:1, delay:1.5});

			console.log($('.sec-02').offset().top);


			$('.dPage .back-to-top').click(function(){
				TweenMax.to('.dPage .sec-03', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut});
				TweenMax.to('.dPage .sec-02', 1, {y: '100%', zIndex:-1, ease:Power2.easeOut},"+=.45");
				TweenMax.to('.dPage .sec-01', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut},"+=1.45");
				$('body').bind('mousewheel keydown');
				$('body').removeClass('is-scrollable');
				$('nav').removeClass('is-inactive');
				
				setTimeout(function(){
					$('.dPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
					$('.dPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
					$('.dPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
				}, 1250);
			});

			$('li.team-member').mouseover(function(e){
				$('div.member-info').eq($(this).index()).addClass('hover');
				$('h3.title').eq($(this).index()).addClass('hover');
				$('a.email').eq($(this).index()).addClass('hover');
				$('a.linkedin').eq($(this).index()).addClass('hover');
			});
			$('li.team-member').mouseout(function(e){
				$('div.member-info').eq($(this).index()).removeClass('hover');
				$('h3.title').eq($(this).index()).removeClass('hover');
				$('a.email').eq($(this).index()).removeClass('hover');
				$('a.linkedin').eq($(this).index()).removeClass('hover');
			});
			function dPageScroll() {


				$('body').bind('mousewheel keydown', function(event) {
					if(pagesContainer.hasClass('is-in-use') && $('.dPage .sec-01').hasClass('is-current-section') ){
						if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37) ) {
							
							setTimeout(function(){

								$('.dPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.dPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								$('.dPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								
							
							}, 1250);

						} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
							TweenMax.to('.sec-01', 1, {y: '-100%', zIndex:-1, ease:Power2.easeOut});
							TweenMax.to('.sec-02', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut});
							

							setTimeout(function(){

								$('.dPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								$('.dPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.dPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								
							
							}, 1250);

						}
					} else if(pagesContainer.hasClass('is-in-use') && $('.dPage .sec-02').hasClass('is-current-section')){
						if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37) ) {
							TweenMax.to('.dPage .sec-01', 1, {y: '0%', zIndex:8000});
							TweenMax.to('.dPage .sec-02', 1, {y: '100%', zIndex:-1});

							setTimeout(function(){

								$('.dPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.dPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								$('.dPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								
								$('body').removeClass('is-scrollable');
								$('nav').removeClass('is-inactive');

								dPageScroll();
							
							}, 1250);
						
						} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
							TweenMax.to('.dPage .sec-02', 1, {y: '-100%', zIndex:-1, ease:Power2.easeOut});
							TweenMax.to('.dPage .sec-03', 1, {y: '0%', zIndex:8000, ease:Power2.easeOut});
							

							setTimeout(function(){

								$('.dPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');
								$('.dPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								$('.dPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								
								$('body').unbind('mousewheel keydown');
								$('body').addClass('is-scrollable');
								$('nav').addClass('is-inactive');
							}, 1250);

						}
					} else if(pagesContainer.hasClass('is-in-use') && $('.dPage .sec-03').hasClass('is-current-section')){
						if( (event.originalEvent.wheelDelta / 120 > 0 || event.keyCode === 38  || event.keyCode === 37)) {
							TweenMax.to('.dPage .sec-02', 1, {y: '0%', zIndex:8000});
							TweenMax.to('.dPage .sec-03', 1, {y: '100%', zIndex:-1});

							setTimeout(function(){
								$('.dPage .sec-01').removeClass('is-current-section is-next-section is-previous-section').addClass('is-previous-section');
								$('.dPage .sec-02').removeClass('is-current-section is-next-section is-previous-section').addClass('is-current-section');
								$('.dPage .sec-03').removeClass('is-current-section is-next-section is-previous-section').addClass('is-next-section');

							}, 1250);
						
						} else if( (event.originalEvent.wheelDelta / 120 < 0 || event.keyCode === 40  || event.keyCode === 39)){
							

							setTimeout(function(){

								
								
							
							}, 1500);

						}
					}
				});
			}
			dPageScroll();
		});

		$('.nav-number:eq(0), .nav-title:eq(0)').click(function(){
			// alert('was clicked');
			$('.close').trigger('click');
			setTimeout(function(){
				mPageBtn.trigger('click');
			},500);
			

		});
		$('.nav-number:eq(1), .nav-title:eq(1)').click(function(){
			// alert('was clicked');
			$('.close').trigger('click');
			setTimeout(function(){
			oPageBtn.trigger('click');
		},500);

		});
		$('.nav-number:eq(2), .nav-title:eq(2)').click(function(){
			// alert('was clicked');
			$('.close').trigger('click');
			setTimeout(function(){
			dPageBtn.trigger('click');
		},500);

		});

});