<?php 

/*
	Template Name: Careers Index

*/

get_header(); ?>

	<?php 

	if ( have_posts() ):
		
		/* Start the Loop */
		while ( have_posts() ) : the_post(); ?>
			
			<?php include 'partials/careers-header.php'; ?>
			<?php include 'partials/careers-nav.php'; ?>
			
		<?php endwhile;
	endif;
	?>


<?php get_footer(); ?>
