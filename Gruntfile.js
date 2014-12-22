module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			all: ['Gruntfile.js', 'main.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};
