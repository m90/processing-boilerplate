module.exports = function(grunt) {

	var fs = require('fs');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			files: ['sketch/**'],
			tasks: ['concat', 'copy', 'config'],
			options : {
				livereload : !grunt.option('no-livereload')
			}
		},
		clean: { //clean up build folder on first run
			build: [
				'build/*',
				'!build/.gitignore' //don't delete .gitignore
				]
		},
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'sketch/data', src: ['**'], dest: 'build/'}, // mirror data folder into build
					{expand: true, cwd: 'sketch/', src: ['*.js'], dest: 'build/'}, // copy included js libs
					{expand: true, cwd: 'res/', src: ['**'], dest: 'build/'} // copy processing.js and livereload.js into build folder
				]
			}
		},
		template: {
			htmlfile: {
				src: 'templates/index.html',
				dest: 'build/index.html',
				engine: 'mustache',
				variables: {
					width: 128, //fall back to 128 x 128 if no size(width, height) is found in code
					height: 128,
					sketch: '<%= pkg.name %>',
					description: '<%= pkg.description %>',
					author: '<%= pkg.author %>',
					id: '<%= pkg.name %>' + '<%= grunt.template.today("dd-mm-yyyy") %>',
					scripts: []
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
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-templater');

	grunt.registerTask('default', ['clean', 'copy', 'concat', 'config' /*initial build*/,'connect' /* connect's callback will call the watch task */]);

	var connect = require('connect');

	grunt.registerTask('connect', 'Start a custom static web server.', function() {

		var port = 	grunt.option('port') || 9001;

		grunt.log.writeln('Starting static web server serving ' + 'build/index.html'.cyan + ' on ' + 'localhost'.cyan + ' port ' + port.toString().cyan + '.');
		connect(connect.static('build')).listen(port);
		grunt.task.run('watch');

	});

	grunt.registerTask('config', 'read configuration and init templating', function(){


		var build = grunt.file.read('build/build.pde'); //try to extract size

		var match = build.match(/size\(\d+,\s*\d+\)/g)[0]; //find first size() call in concatenated .pde

		if (match){ // if size(x,y) is present in build extract values to use it for canvas element & css

			var dim = match.toString().replace(/\s*/g,'').replace('size(','').replace(')','').split(',');

			grunt.config.set(['template', 'htmlfile', 'variables', 'width'], dim[0]);
			grunt.config.set(['template', 'htmlfile', 'variables', 'height'], dim[1]);

			grunt.log.writeln('Using '+ match.toString().cyan + ' as canvas dimensions');

		} else {

			grunt.log.writeln('Using fallback of'+ '128x128'.cyan + ' as canvas dimensions');

		}

		scripts = [];

		fs.readdirSync('sketch/').forEach(function(el){//find all javascript files in sketch directory and include them in the build folder and the HTML file

			if (el.slice(-3) === '.js'){

				scripts.push(el);

			}

		});

		grunt.config.set(['template', 'htmlfile', 'variables', 'scripts'], scripts);

		if (scripts.length){

			grunt.log.writeln('Found and included the following scripts: ' + scripts.toString().cyan);

		}

		grunt.task.run('template:htmlfile');

	});


};