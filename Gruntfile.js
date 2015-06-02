module.exports = function(grunt){
	grunt.initConfig({
		uglify: {
			all: ['main.js']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};
