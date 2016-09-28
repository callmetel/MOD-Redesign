//Preload Image & Video Content while Animating Load
		
		// number of loaded images for preloader progress 
		var loadedCount = 0; //current number of images loaded
		var thingsToLoad = $('.load').length; //number of slides with .bcg container
		var loadingProgress = 0; //timeline progress - starts at 0

		$('.load').imagesLoaded({
		    background: true
		  }
		).progress( function( instance, image ) {
			loadProgress();
		});

		function loadProgress(imgLoad, image)
		{
		 	//one more image has been loaded
			loadedCount++;

			loadingProgress = (loadedCount/thingsToLoad);

			//console.log(loadingProgress);

			// GSAP timeline for our progress bar
			TweenLite.to(progressTl, 1, {progress:loadingProgress, ease:Linear.easeNone});

		}

		//progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
		var progressTl = new TimelineMax({paused:true,onUpdate:progressUpdate,onComplete:loadComplete});

		progressTl
			//tween the progress bar width
			.to($('.progress span'), 1, {scaleX:1, transformOrigin:'left', ease:Linear.easeNone});

		//as the progress bar witdh updates and grows we put the precentage loaded in the screen
		function progressUpdate()
		{
			//the percentage loaded based on the tween's progress
			loadingProgress = Math.round(progressTl.progress() * 100);
			//we put the percentage in the screen
			$(".txt-perc").text(loadingProgress + '%');

		}

		function loadComplete() {
			setTimeout(function(){
				// preloader out
				var preloaderOutTl = new TimelineMax();

				preloaderOutTl
					.to($('.txt'), 0.5, { autoAlpha: 0})
					.set($('body'), {className: '-=is-loading'})
					.to($('#preloader .section-left'), 1, {x: '-100%', ease:Power2.easeInOut},"-=.25")
					.to($('#preloader .section-right'), 1, {x: '100%', ease:Power2.easeInOut},"-=1")
					.set($('#preloader'), {className: '+=is-hidden'})
					.set('#slide-mod .line', {scaleX:0, x:'-300px'},"-=1")
					.fromTo('#slide-mod .slide-info', 1.5, {alpha:0, marginTop:'100px'},{alpha: 1, marginTop:0})
					.to('#slide-mod .line', 1.5, {scaleX: 1, x:'0'}, "-=1")
					// .from($('.scroll-hint'), 0.3, {y: -20, autoAlpha: 0, ease:Power1.easeOut}, '+=0.1');

				return preloaderOutTl;
				var loading = $(document).find('.load');
				loading.removeClass('load').addClass('loaded');
			}, 1000);

			setTimeout(function(){
				$('#preloader').remove();
			},2000);
			
		}
