module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: "src/api",
                        src: [
                            "**/*.yaml",
                            "**/*.yml",
                            "**/*.md"
                        ],
                        dest: "./dist/api"
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", [
        "copy"
    ]);

};