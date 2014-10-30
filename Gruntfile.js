// Generated on 2014-10-29 using generator-mobile 1.0.0-alpha.2
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var gruntConfig = {
        app: 'workdir',
        dist: 'www'
    };

    grunt.initConfig({
        booking: gruntConfig,
        // TODO: Make this conditional
        watch: {
            sass: {
                files: ['<%= booking.app %>**/*.{scss,sass}'],
                tasks: ['sass:server']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= booking.app %>/*.html',
                    '{.tmp,<%= booking.app %>}/css/{,*/}*.css',
                    '{.tmp,<%= booking.app %>}/js/{,*/}*.js',
                    '<%= booking.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, gruntConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, gruntConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= booking.dist %>/*',
                        '!<%= booking.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        browser_sync: {
            dev: {
                bsFiles: {
                    src : '<%= booking.app %>/css/index.css'
                },
                options: {
                    watchTask: false,
                    debugInfo: true,
                    // Change to 0.0.0.0 to access externally
                    host: 'http://localhost:<%= connect.options.port %>',
                    server: {
                        baseDir: '<%= booking.app %>'
                    },
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true
                    }
                }
            }
        },
        sass: {
            server: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    '.tmp/css/style.css': [
                        '<%= booking.app %>/css/{,*/}*.{sass,scss}'
                    ]
                }
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    '<%= booking.dist %>/css/style.css': [
                        '<%= booking.app %>/css/{,*/}*.{sass,scss}'
                    ]
                }
            }
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: gruntConfig.app + '/js',
                    optimize: 'none',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= booking.dist %>/js/{,*/}*.js',
                        '<%= booking.dist %>/css/{,*/}*.css'
                    ]
                }
            }
        },
        modernizr: {

            // Path to the build you're using for development.
            "devFile" : "<%= booking.app %>/bower_components/modernizr/modernizr.js",

            // Path to save out the built file.
            "outputFile" : "<%= booking.dist %>/js/modernizr.js",

            // Based on default settings on http://modernizr.com/download/
            "extra" : {
                "shiv" : true,
                "printshiv" : false,
                "load" : true,
                "mq" : false,
                "cssclasses" : true
            },

            // Based on default settings on http://modernizr.com/download/
            "extensibility" : {
                "addtest" : false,
                "prefixed" : false,
                "teststyles" : false,
                "testprops" : false,
                "testallprops" : false,
                "hasevents" : false,
                "prefixes" : false,
                "domprefixes" : false
            },

            // By default, source is uglified before saving
            "uglify" : true,

            // Define any tests you want to impliticly include.
            "tests" : [],

            // By default, this task will crawl your project for references to Modernizr tests.
            // Set to false to disable.
            "parseFiles" : true,

            // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
            // You can override this by defining a "files" array below.
            // "files" : [],

            // When parseFiles = true, matchCommunityTests = true will attempt to
            // match user-contributed tests.
            "matchCommunityTests" : false,

            // Have custom Modernizr tests? Add paths to their location here.
            "customTests" : []
        },
        useminPrepare: {
            options: {
                dest: '<%= booking.dist %>'
            },
            html: '<%= booking.app %>/index.html'
        },
        usemin: {
            options: {
                dirs: ['<%= booking.dist %>']
            },
            html: ['<%= booking.dist %>/{,*/}*.html'],
            css: ['<%= booking.dist %>/styles/{,*/}*.css']
        },
        cssmin: {
            dist: {
                files: {
                    '<%= booking.dist %>/css/main.css': [
                        '<%= booking.app %>/css/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true*/
                },
                files: [{
                    expand: true,
                    cwd: '<%= booking.app %>',
                    src: '*.html',
                    dest: '<%= booking.dist %>'
                }]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= booking.app %>',
                    dest: '<%= booking.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'img/{,*/}*.{webp,gif}',
                        'js/**',
                        'img/**'
                    ]
                }, {
                    expand: true,
                    cwd: '<%= booking.app %>',
                    dest: '<%= booking.dist %>/img',
                    src: [
                        'generated/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                'sass:server'
            ],
            test: [
                'sass:server'
            ],
            dist: [
                'sass:dist',
                'htmlmin'
            ]
        },
        bower: {
            options: {
                exclude: ['modernizr']
            },
            all: {
                rjsConfig: '<%= booking.app %>/scripts/main.js'
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'htmlmin',
        'requirejs',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        'sass:dist',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'test',
        'build'
    ]);
    
};
