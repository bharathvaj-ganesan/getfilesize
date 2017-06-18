module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
        files: ['gruntfile.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('run', ['jshint']);

};