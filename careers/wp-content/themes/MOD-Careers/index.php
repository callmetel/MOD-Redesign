<?php get_header(); ?>

	<?php 

	if ( have_posts() ):
		
		/* Start the Loop */
		while ( have_posts() ) : the_post(); ?>
			
			<div class="careers-heading">
				<img src="../../../../app/images/MOD_LOGO-WHITE.svg" alt="" id="mod-logo">
				<h1>CAREERS</h1>
				<a href="#career-list"><img src="../../../../app/images/down-arrow-white.svg" alt="" id="down-arrow"></a>
			</div>
			<ul id="career-list" class="career-categories-list">
				<li id="category-heading" class="career-category">What Do You Do?</li>
				<a class="link link--kumya" href="http://mod.preview:8888/careers/careers/client-services/"><li data-letters="&nbsp;Client Services" class="career-category">&nbsp;Client Services</li></a>
				<a class="link link--kumya" href=""><li data-letters="&nbsp;Creative" class="career-category">&nbsp;Creative</li></a>
				<a class="link link--kumya" href=""><li data-letters="&nbsp;Film" class="career-category">&nbsp;Film</li></a>
				<a class="link link--kumya" href=""><li data-letters="&nbsp;Strategy" class="career-category">&nbsp;Strategy</li></a>
				<a class="link link--kumya" href=""><li data-letters="&nbsp;Web" class="career-category">&nbsp;Web</li></a>
				<a class="link link--kumya" href=""><li data-letters="&nbsp;Operations" class="career-category">&nbsp;Operations</li></a>
				<a class="link link--kumya" href=""><li data-letters="&nbsp;Internships" class="career-category">&nbsp;Internships</li></a>
			</ul>
					
		<?php endwhile;
	endif;
	?>

<?php get_footer(); ?>
