"use strict";

// Initialize New Relic Node.js agent

if (process.env.NEW_RELIC_LICENSE_KEY) {
    require('newrelic');
}

// Load the libraries and modules

var config = {
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            example: {
                // Configuration for the module
            }
        }
    }
};
require('dragonnodejs')(config);
