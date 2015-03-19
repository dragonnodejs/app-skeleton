"use strict";

// Initialize New Relic Node.js agent

if (process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY && process.env.NEW_RELIC_LEVEL) {
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
