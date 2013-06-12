module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['sketch/*.pde'],
			tasks: ['template:htmlfile', 'concat', 'copy'],
			options : {
				livereload : true
			}
		},

		copy: {
			main: {
				files: [
					{expand: true, cwd: 'sketch/data', src: ['**'], dest: 'build/data/'} // mirror data folder
				]
			}
		},
		template: {
			htmlfile: {
				src: 'templates/index.html',
				dest: 'build/index.html',
				engine: 'mustache',
				variables: {
					width: '<%= pkg.width %>',
					height: '<%= pkg.height %>',
					sketch: '<%= pkg.name %>',
					description: '<%= pkg.description %>',
					author: '<%= pkg.author %>',
					id: '<%= pkg.name %>' + '<%= grunt.template.today("dd-mm-yyyy") %>'
				}
			}
		},
		concat : {
			build : {
				src: ['sketch/*.pde'],
				dest: 'build/build.pde'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-templater');

	grunt.registerTask('default', ['template:htmlfile', 'concat', 'copy' /*initial build*/,'connect' /* connect's callback will call the watch task */]);

	var connect = require('connect');

	grunt.registerTask('connect', 'Start a custom static web server.', function() {

		grunt.log.writeln('Starting static web server serving build/index.html on localhost port 9001.');
		connect(connect.static('build')).listen(9001);
		grunt.task.run('watch');

	});


};