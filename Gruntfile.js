module.exports = function (grunt) {

	grunt.initConfig({
		criticalcss: {
			custom: {
				options: {
					url: "http://bmesymposium.com/",
					width: 1200,
					height: 900,
					outputfile: "dist/critical.css",
					filename: "/Users/nygfan72/Documents/GitHub/BMESymposium/all.css",
					buffer: 800 * 1024,
					ignoreConsole: false
				}
			}
		},
	});
	// Load the plugins
	grunt.loadNpmTasks('grunt-criticalcss');

	// Default tasks.
	grunt.registerTask('default', ['criticalcss']);
};
