module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['sketch/*.pde'],
			tasks: ['concat', 'connect']
		},

			concat : {
			build : {
				src: ['sketch/*.pde',],
				dest: 'build/build.pde'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['concat' /*initial build*/, 'connect' /* connect's callback will call the watch task */]);

	var connect = require('connect');

	grunt.registerTask('connect', 'Start a custom static web server.', function() {

		grunt.log.writeln('Starting static web server serving build/index.html on localhost port 9001.');
		connect(connect.static('build')).listen(9001);

		grunt.task.run('watch');

	});


};