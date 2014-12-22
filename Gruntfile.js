module.exports = function(grunt){
	grunt.initConfig({
		jshint: {
			all: ['Gruntfile.js', 'main.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('default', 'jshint');
};
