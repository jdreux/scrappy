module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        handlebars: {
            options: {
                namespace: 'Handlebars.templates',
                processName: function (filePath) {
                    var pieces = filePath.split("/");

                    return pieces[pieces.length - 1].replace(/\.[^/.]+$/, "");
                }
            },
            dist: {
                files: {
                    "src/inject/compiled-hbs.js": ["src/templates/**/*.hbs"]
                }
            }
        },
        watch: {
            hbs: {
                files: ['src/templates/**/*.hbs'],
                tasks: ['handlebars'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', 'handlebars');
};