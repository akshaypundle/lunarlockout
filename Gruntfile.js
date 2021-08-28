module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'dest/game.min.js': ['src/game.js']
        }
      }
    },
    prettier: {
      build: {
        src: "src/*.js"
      },
    },
    shell: {
      push_s3: {
        command: "./push_s3.sh"
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-prettier');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'prettier']);
  grunt.registerTask('push_s3', ['prettier', 'shell']);

};
