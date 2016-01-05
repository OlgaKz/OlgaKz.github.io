//declare variables fro grunt builder/
//var mozjpeg = require("imagemin-mozjpeg");
//var index_html_tmeplate = "sources/jade/main_page.jade";


module.exports = function (grunt) {
    grunt.initConfig({
        //task cleans build dir
        "clean": ["build"],
        //task compiles .jade templates files
        "jade": {
            "compile": {
                "options": {
                    "pretty": true,
                },
                "files": [{
                    expand: true,
                    cwd: "sources/jade/",
                    //compile
                    src: ["*.jade"],
                    dest: "build/html/",
                    ext: ".html"
                }]
            }
        },
        /*
        //task to rename index.html
        rename: {
            moveThis: {
                src: 'build/html/main_page.html',
                dest: 'build/html/index.html'
            }
            // Any number of targets here...
        },
        */
        //task for mninifying images .jpg,png
        "imagemin": {
            "dynamic": {
                "options": {
                    "optimizationLevel": 7,
                    "progressive": true,
                    "use": ["grunt-contrib-imagemin"],
                    "pngquant": false
                },
                "files": [
                    {
                        "expand": true,
                        "cwd": "sources/images/",
                        "src": [
                            "**/*.{png,jpg}"
                        ],
                        "dest": "build/images/"
                    }
                ]
            }
        },
        //task copies all stuff except jade templates saving directory structures
        "copy": {
            "build": {
                "cwd": "sources",
                "src": ["js/*", "css/*", "font/**/*", "!**/*.jade"],
                "dest": "build",
                "expand": true
            },
            //copy all other iamges .gif
            "build2": {
                "cwd": "sources/images/",
                "src": ["**/*.gif"],
                "dest": "build/images/",
                "expand": true
            },
            //copy main_page -> index.html
            "build3": {
                files: {
                    'build/html/index.html': 'build/html/main_page.html'
                }
            }
        },
        //update html files automatically
        //Live reload watcher ###
        //i grunt-contrib-watch ###
        "watch": {
            "jade": {
                "files": "sources/jade/**/*.jade",
                "tasks": ["build"],
                "options": {
                    "livereload": true
                }
            },
            "data": {
                "files": ["sources/**/**/*.*"],
                "tasks": ['build'],
                "options": {
                    "livereload": true
                }
            }
        }
    });

    //load required nnpm modules for grunt tasks, otherwise task will fail
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    //grunt.loadNpmTasks("grunt-rename");

    //register available for run tasks
    grunt.registerTask("clean-all", "clean build dir", ["clean"]);
    grunt.registerTask("jade-compile", "Convert Jade templates into html templates", ["jade"]);
    grunt.registerTask("build", "Convert Jade templates into html templates", [
        "clean",
        "jade",
        "imagemin",
        "copy"
    ]);
};