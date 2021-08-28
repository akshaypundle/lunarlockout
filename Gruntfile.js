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
        command: "s3cmd put src/game.css src/game.js src/game.html s3://moonji.net"
      },
      push_min_s3: {
        command: "s3cmd put src/game.css src/game.html s3://moonji.net && s3cmd put dest/game.min.js s3://moonji.net/game.js"
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-prettier');
  grunt.loadNpmTasks('grunt-shell');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'prettier']);
  grunt.registerTask('push_s3', ['prettier', 'shell:push_s3']);
  grunt.registerTask('push_min_s3', ['uglify', 'shell:push_min_s3']);

};
