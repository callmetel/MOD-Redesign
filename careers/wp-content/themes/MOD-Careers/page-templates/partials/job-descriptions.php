<section id="jobs">
	<ul id="jobs-list" role="main">

			<?php 

				// check for rows (parent repeater)
			if( have_rows('single_job_description') ): ?>
				<?php 

				remove_filter ('acf_the_content', 'wpautop');
					// loop through rows (parent repeater)
				while( have_rows('single_job_description') ): the_row(); 

					//declare subfield variables
				$title = get_sub_field('job_title');
				$caption = get_sub_field('title_caption');
				$question = get_sub_field('description_title_question');
				$description = get_sub_field('description');
				$rList = get_sub_field('responsibilities_list');
				$mList = get_sub_field('musts_list');


				?>
				
				<li class="individual-job">

					<h2 class="job-title"><?php echo $title ?></h2>
					<p class="title-caption"><?php echo $caption ?></p>
					<h3 class="description-title-question"><?php echo $question ?></h3>
					<p class="description"><?php echo $description ?></p>
					<ul class="responsibilities-list">
						<h4>Responsibilities:</h4>

						<?php 

							// check for rows (sub repeater)
							if( have_rows('responsibilities_list') ): ?>
								<?php 

									// loop through rows (sub repeater)
									while( have_rows('responsibilities_list') ): the_row();
									$responsibility = get_sub_field('responsibilty');
									?>
							<li class="responsibility"><?php echo $responsibility ?></li>
						<?php endwhile; ?>
					<?php endif; ?>
					</ul>	
					<ul class="musts-list">
						<h4>Musts:</h4>

						<?php 

							// check for rows (sub repeater)
							if( have_rows('musts_list') ): ?>
								<?php 

									// loop through rows (sub repeater)
									while( have_rows('musts_list') ): the_row();
									$must = get_sub_field('must');
									?>
							<li class="must"><?php echo $must ?></li>
						<?php endwhile; ?>
					<?php endif; ?>
					</ul>	
					<p class="resume-cta">Come blow our minds.<br>Send your resume & chops today.</p>
					<a href="mailto:CAREERS@MODWORLDWIDE.COM?subject=<?php echo $title ?>" class="apply-btn btn">APPLY NOW</a>
			
			</li>
			<?php endwhile; // while has_sub_field('single_job_description') ): ?>
	<?php endif; // if( get_field('single_job_description') ): ?>
	</ul><!-- jobs list -->
</section>