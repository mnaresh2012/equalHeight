module.exports = function(grunt){
	grunt.initConfig({
		jsHint: {
			all: ['Gruntfile.js', 'main.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('default', 'jshint');
};
