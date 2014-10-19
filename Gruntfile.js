module.exports = function(grunt) {

	// LOAD TASKS FROM PACKAGE MANEFEST
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// GRUNT CONFIG
	grunt.initConfig({

		// IMPORT MANIFEST
		pkg: grunt.file.readJSON('package.json'),

	    // CONCAT
		concat: {
			dist: {
				src: [
					'libs/src/js/vendor/jquery/jQuery.2.1.1.min.js',
					//'libs/src/js/vendor/gsap/TweenMax.1.13.2.min.js',
					'libs/src/js/vendor/flowtype/flowtype.js',
					'libs/src/js/script/init.js'],
				dest: 'libs/src/js/bundle.js'
			}
		},

		// MINIFY
		uglify: {
			options: {
				compress: {
			    	drop_console: true
			    }
			},
			target: {
				src: ['libs/src/js/bundle.js'],
				dest: 'libs/dist/js/bundle.min.js'
			}
		},

		// COMPASS
		compass: {
			dist: {
				options: {
					sassDir: 'libs/src/scss/',
					cssDir: 'libs/src/css/',
					environment: 'production',
					outputStyle: 'compressed'
				}
			}
		},

		// AUTOPREFIX
		autoprefixer: {
			options: {
				formatting : {
					indent_size : 4
				}
			},
			files: {
				src: 'libs/src/css/bundle-noprefix.css',
				dest: 'libs/dist/css/bundle.css'
			}
		},

		// WATCH
		watch: {
			all: {
				files: 'index.html',
				options: {
					livereload: true
				}
			},
			scripts: {
				files: 'libs/src/js/script/*.js',
				tasks: ['concat', 'uglify'],
				options: {
					livereload: true
				}
			},
			scss: {
				files: 'libs/src/scss/*.scss',
				tasks: ['compass'],
				options: {
					livereload: true
				}
			},
			css: {
				files: 'libs/src/css/bundle-noprefix.css',
				tasks: ['autoprefixer'],
				options: {
					livereload: true
				}
			},
		}
	});

	// CREATE TASK 'default'
	grunt.registerTask('default', ['concat', 'uglify', 'compass', 'autoprefixer']);

};



