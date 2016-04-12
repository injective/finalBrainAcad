module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['js/arkanoid_script.js', 'js/temppppp.js'],
                dest: 'dest/output.js'
            }
        },
        jshint: {
            options: {
                esversion: 6
            },
            beforeconcat: ['Gruntfile.js', 'js/**/*.js'],
            afterconcat: ['dest/output.js'],
            afteruglify: ['dest/output.min.js']
        },
        babel: {
            options: {
                presets: ['es2015']
            },
            dist: {
                files: {
                    'dest/output.js': 'dest/output.js'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dest/output.min.js': 'dest/output.js'
                }
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['default']
            }
        },
        less: {
            development: {
                options: {
                    paths: ['assets/css']
                },
                files: {
                    'path/to/result.css': 'less/temp.less'
                }
            },
        },
        clean: {
            build: {
                src: ['dest']
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.registerTask('default', [
        'jshint:beforeconcat',
        'concat',
        'jshint:afterconcat',
        'babel',
        'uglify'
    ]);
};
