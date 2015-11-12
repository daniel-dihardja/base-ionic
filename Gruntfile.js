module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            www: {
                src: [
                    "www"
                ]
            },

            dev: {
                src:[
                    'src/assets/css',
                    'src/assets/fonts'
                ]
            }
        },

        useminPrepare: {
            html:'src/index.html',
            options:{
                dest:'www'
            }
        },

        usemin:{
            html:['www/index.html']
        },

        copy:{
            index_www: {
                src:    'src/index.html', dest:'www/index.html'
            },

            icons_www: {
                cwd:    'src/bower_components/ionicons/fonts',
                src:    '*.*',
                dest:   'www/assets/fonts',
                expand: true
            },

            icons_dev: {
                cwd:    'src/bower_components/ionicons/fonts',
                src:    '*.*',
                dest:   'src/assets/fonts/',
                expand: true
            },

            images:{
                cwd:    'src/assets/images',
                src:    '*.*',
                dest:   'www/assets/images',
                expand: true
            }
        },

        ngtemplates:  {
            'app':{
                cwd:      'src',
                src:      'modules/**/*.html',
                dest:     'www/js/templates.js'
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/scss',
                    src: ['*.scss'],
                    dest: 'src/assets/css',
                    ext: '.css'
                }]
            }
        },

        webfont: {
            dev: {
                src: 'src/assets/svg/*.svg',
                dest: 'src/assets/iconfonts'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-webfont');


    // registered task
    grunt.registerTask('dev', [
        'clean:dev',
        'copy:icons_dev',
        'sass',
        'webfont:dev'
    ]);

    grunt.registerTask('www', [
        'clean:www',
        'copy:index_www',
        'copy:icons_www',
        'copy:images',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'usemin',
        'ngtemplates']);

}
