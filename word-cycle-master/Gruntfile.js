module.exports = function(grunt) {
  // Do grunt-related things in here

  // Load npm tasks
  require('load-grunt-tasks')(grunt);

	// configure the tasks
	grunt.initConfig({
		// This line makes your node configurations available for use
		pkg: grunt.file.readJSON('package.json'),
		compass: {                  // Task
			dist: {                   // Target
				options: {
					config: 'config.rb',
					sassDir: 'sass',
					cssDir: 'css',
					environment: 'production'
				}
			}
		},
		connect: {
			server: {
				options: {
					base: '.',
					port: 9000,
					hostname: '0.0.0.0'
				}
			}
		},
		watch: {
			options: {
				livereload: 1337
			},
			css: {
				// Watch all Sass files
				files: ['sass/**/*.{sass,scss}'],
				tasks: ['compass']
			},
			js: {
				files: ['js/**/*.js'],
				tasks: ['jshint']
			},
			image: {
				cwd: 'img/min/',
				files: ['**/*.{png, jpg, gif}'],
			}
		},
		jshint: {
			all: [
				'js/**/*.js',
				'!js/classListShim.js'
			]
		}
	});

	//Register Tasks
	//Launch Grunt Server
	grunt.registerTask('server', [
		'jshint',
		'connect',
		'watch'
	]);
};