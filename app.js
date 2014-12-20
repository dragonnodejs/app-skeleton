"use strict";

// Load the libraries and modules

var config = {
    npm: __dirname + '/node_modules/',
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
require('dragonnodejs')(config);
