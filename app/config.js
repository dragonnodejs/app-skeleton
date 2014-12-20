"use strict";

// Configuration for the application

module.exports = {
    npm: __dirname + '/../node_modules/',
    libraries: {
        nodejs: {},
        npm: {}
    },
    directory: __dirname + '/modules/',
    modules: {
        npm: {},
        directory: {
            example: {
                // Configuration for the module
            }
        }
    }
};
