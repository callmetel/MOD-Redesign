<?php

add_action( 'wp_enqueue_scripts', 'register_jquery' );
function register_jquery() {
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', ( 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js' ), false, null, true );
    wp_enqueue_script( 'jquery' );
}

function MOD_script_enqueue() {
	wp_enqueue_style( 'customstyle', get_template_directory_uri() . '/assets/css/style.css' , array(), '1.0.0', 'all' );
	wp_enqueue_script( 'customjs', get_template_directory_uri() . '/assets/js/script.js' , array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts' , 'MOD_script_enqueue');

// Let's hook in our function with the javascript files with the wp_enqueue_scripts hook 

// Register some javascript files, because we love javascript files. Enqueue a couple as well 
function MOD_load_javascript_files() {
  wp_register_script( 'global_script', get_template_directory_uri() . '/assets/js/_script.js', array('jquery'), '1.0.0', true );

}
add_action( 'wp_enqueue_scripts', 'MOD_load_javascript_files' );

function MOD_theme_setup(){

	add_theme_support('menus');

  register_nav_menus(array(
    'primary' => __('MOD Jobs Nav', 'MOD'),
    ));
 
}

add_action( 'init', 'MOD_theme_setup' );

/**
 * Remove Original Wysiwyg Editor from Backend pages
 */

add_action('init', 'my_remove_editor_from_post_type');
function my_remove_editor_from_post_type() {
    remove_post_type_support( 'page', 'editor' );
}

/**
 * Remove Wyiswg Editor Toolbar
 */

add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );
function my_toolbars( $toolbars )
{
  // Uncomment to view format of $toolbars
  /*
  echo '< pre >';
    print_r($toolbars);
  echo '< /pre >';
  die;
  */

  // Add a new toolbar called "Very Simple"
  // - this toolbar has only 1 row of buttons
  $toolbars['Very Simple' ] = array();
  $toolbars['Very Simple' ][1] = array('bold' , 'italic' , 'underline' );

  // Edit the "Full" toolbar and remove 'code'
  // - delet from array code from http://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
  if( ($key = array_search('code' , $toolbars['Full' ][2])) !== false )
  {
      unset( $toolbars['Full' ][2][$key] );
  }

  // remove the 'Basic' toolbar completely
  unset( $toolbars['Basic' ] );

  // return $toolbars - IMPORTANT!
  return $toolbars;
}

/**
 * Allow SVG files to be uploaded
 */

add_filter('upload_mimes', 'custom_upload_mimes');

function custom_upload_mimes ( $existing_mimes=array() ) {

  // add the file extension to the array

  $existing_mimes['svg'] = 'mime/type';

        // call the modified list of extensions

  return $existing_mimes;

}

/**
 * Advanced Custom Fields
 * [add field groups to the site]
 */

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array (
  'key' => 'group_56f45a86b6f0d',
  'title' => 'Job Descriptions',
  'fields' => array (
    array (
      'key' => 'field_56f45a93a4ccf',
      'label' => 'Single Job Description',
      'name' => 'single_job_description',
      'type' => 'repeater',
      'instructions' => 'Each field below relates to the corresponding job description. To add a job simply click the \'Add A Job\' tab in the bottom right corner.',
      'required' => 0,
      'conditional_logic' => 0,
      'wrapper' => array (
        'width' => '',
        'class' => 'single-job-description',
        'id' => '',
      ),
      'min' => '',
      'max' => '',
      'layout' => 'row',
      'button_label' => 'Add A Job',
      'sub_fields' => array (
        array (
          'key' => 'field_56f45b3aa4cd0',
          'label' => 'Job Title',
          'name' => 'job_title',
          'type' => 'text',
          'instructions' => 'Enter the job title here',
          'required' => 1,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => 'job-title',
            'id' => '',
          ),
          'default_value' => '',
          'placeholder' => 'Film Editor',
          'prepend' => '',
          'append' => '',
          'maxlength' => '',
          'readonly' => 0,
          'disabled' => 0,
        ),
        array (
          'key' => 'field_56f45bc4a4cd1',
          'label' => 'Title Caption',
          'name' => 'title_caption',
          'type' => 'text',
          'instructions' => 'Enter the title caption here. Use the placeholder text for inspiration. ',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => 'title-caption',
            'id' => '',
          ),
          'default_value' => '',
          'placeholder' => 'The world is your .mov',
          'prepend' => '',
          'append' => '',
          'maxlength' => '',
          'readonly' => 0,
          'disabled' => 0,
        ),
        array (
          'key' => 'field_56f45c88a4cd2',
          'label' => 'Description Title Question',
          'name' => 'description_title_question',
          'type' => 'text',
          'instructions' => 'Enter the description title question here.',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => 'description-title',
            'id' => '',
          ),
          'default_value' => '',
          'placeholder' => 'Can you cut through our hearts?',
          'prepend' => '',
          'append' => '',
          'maxlength' => '',
          'readonly' => 0,
          'disabled' => 0,
        ),
        array (
          'key' => 'field_56f45da9a4cd3',
          'label' => 'Description',
          'name' => 'description',
          'type' => 'wysiwyg',
          'instructions' => 'Enter the job description here.  **AVOID FORMATTING TOOLS ABOVE**',
          'required' => 0,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => 'description',
            'id' => '',
          ),
          'default_value' => '',
          'tabs' => 'all',
          'toolbar' => 'very_simple',
          'media_upload' => 1,
        ),
        array (
          'key' => 'field_56f45e31a4cd4',
          'label' => 'Responsibilities List',
          'name' => 'responsibilities_list',
          'type' => 'repeater',
          'instructions' => 'Enter a responsibility here. Use the \'Add A Responsibility\' button to add more than one.',
          'required' => 1,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => 'responsibilities-list',
            'id' => '',
          ),
          'min' => '',
          'max' => '',
          'layout' => 'row',
          'button_label' => 'Add A Responsibility',
          'sub_fields' => array (
            array (
              'key' => 'field_56f45f15a4cd5',
              'label' => 'Responsibilty',
              'name' => 'responsibilty',
              'type' => 'text',
              'instructions' => 'Enter one responsibility here.',
              'required' => 0,
              'conditional_logic' => 0,
              'wrapper' => array (
                'width' => '',
                'class' => 'responsibilty',
                'id' => '',
              ),
              'default_value' => '',
              'placeholder' => 'Understanding a brief outline of footage and a shot list or script.',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
              'readonly' => 0,
              'disabled' => 0,
            ),
          ),
        ),
        array (
          'key' => 'field_56f45f8ea4cd6',
          'label' => 'Musts List',
          'name' => 'musts_list',
          'type' => 'repeater',
          'instructions' => 'Enter a MUST here. Use the \'Add Another MUST\' button to add more than one.',
          'required' => 1,
          'conditional_logic' => 0,
          'wrapper' => array (
            'width' => '',
            'class' => 'musts-list',
            'id' => '',
          ),
          'min' => '',
          'max' => '',
          'layout' => 'row',
          'button_label' => 'Add A Must',
          'sub_fields' => array (
            array (
              'key' => 'field_56f45f8ea4cd7',
              'label' => 'Must',
              'name' => 'must',
              'type' => 'text',
              'instructions' => 'Enter one MUST here.',
              'required' => 1,
              'conditional_logic' => 0,
              'wrapper' => array (
                'width' => '',
                'class' => 'must',
                'id' => '',
              ),
              'default_value' => '',
              'placeholder' => '3-5 years experience.',
              'prepend' => '',
              'append' => '',
              'maxlength' => '',
              'readonly' => 0,
              'disabled' => 0,
            ),
          ),
        ),
      ),
    ),
  ),
  'location' => array (
    array (
      array (
        'param' => 'page',
        'operator' => '==',
        'value' => '8',
      ),
    ),
    array (
      array (
        'param' => 'page',
        'operator' => '==',
        'value' => '13',
      ),
    ),
    array (
      array (
        'param' => 'page',
        'operator' => '==',
        'value' => '15',
      ),
    ),
    array (
      array (
        'param' => 'page',
        'operator' => '==',
        'value' => '17',
      ),
    ),
    array (
      array (
        'param' => 'page',
        'operator' => '==',
        'value' => '19',
      ),
    ),
    array (
      array (
        'param' => 'page',
        'operator' => '==',
        'value' => '21',
      ),
    ),
    array (
      array (
        'param' => 'page',
        'operator' => '==',
        'value' => '23',
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'left',
  'instruction_placement' => 'label',
  'hide_on_screen' => '',
  'active' => 1,
  'description' => '',
));

endif;

