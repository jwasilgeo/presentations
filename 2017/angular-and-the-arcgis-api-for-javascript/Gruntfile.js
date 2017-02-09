/* global module:false */
module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    connect: {
      example: {
        port: 1337,
        // base: 'src/slides'
      }
    }
  });

  // Dependencies
  grunt.loadNpmTasks('grunt-connect');

  // Default task
  grunt.registerTask('default', []);

};
