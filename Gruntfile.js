module.exports = function(grunt) {

  // configure the tasks
  grunt.initConfig({

    copy: {
      static: {
        cwd: 'source',
        src: [ '**/*.html','**/*.css','elements/**/*.*','!bower_components/**/*.*','!old/**/*.*','!bower.json'],
        dest: 'build',
        expand: true
      },
      bower_components: {
        cwd: 'source',
        src: [ 'bower_components/**/*.*'],
        dest: 'build',
        expand: true
      },
    },

    clean: {
      build: ['build'],
    },

    watch: {
      copy: {
        files: [ 'source/**' ],
        tasks: [ 'copy:static' ]
      }
    },

    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*'
        }
      }
    }

  });

  // load the tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // define the tasks
  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    [ 'clean:build', 'copy:static','copy:bower_components']
  );

  grunt.registerTask(
    'default',
    'Watches the project for changes, automatically builds them and runs a server.',
    [ 'build', 'connect', 'watch' ]
  );
};
