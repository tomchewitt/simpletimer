module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON('package.json'),

    // Banner definitions
    meta: {
      banner: '/*\n' +
        ' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
        ' *  <%= pkg.description %>\n' +
        ' *\n' +
        ' *  Made by <%= pkg.author.name %>\n' +
        ' *  Under <%= pkg.license %> License\n' +
        ' */\n'
    },

    // Concat definitions
    concat: {
      dist: {
        src: ['libs/src/js/*.js'],
        dest: 'libs/dist/js/main.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

    // Lint definitions
    jshint: {
      src: ['libs/src/js/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Minify definitions
    uglify: {
      my_target: {
        src: ['libs/dist/js/main.js'],
        dest: 'libs/dist/js/main.min.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

    sass: {
      options: {
        style: 'compressed',
        banner: '<%= meta.banner %>'
      },
      dist: {
        files: {
          'libs/dist/css/screen.css' : 'libs/src/scss/screen.scss'
        }
      }
    },

    watch: {
      css: {
        files: 'libs/src/**/*.scss',
        tasks: ['sass']
      }
    },

    compass: {
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'libs/src/scss',
          cssDir: 'libs/dist/css',
          environment: 'production',
          outputStyle: 'compressed'
          //config: 'config.rb'
        }
      }
    }

    // jasmine: {
    //   src: 'src/list-selection.jquery.js',
    //   options: {
    //     specs: 'spec/*Spec.js',
    //     helpers: [
    //       'lib/jquery-1.10.2.js',
    //       'lib/jasmine-jquery-1.5.8.js',
    //       'spec/*Helper.js'
    //     ],
    //   }
    // }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  // grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'compass']);
};
