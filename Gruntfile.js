module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-csscomb'); 
	grunt.initConfig({
		csscomb: {
				options: {
					config: "csscomb.json"
				},                          
				style: {              
					expand: true,
					src: ["source/**/*.scss"]
				}
			},
		watch: {			       
			source: {
				files: ['source/**/*.scss'],
				tasks: ['csscomb'],
				options: {
					livereload: true
				}
			}
		}

	});
}