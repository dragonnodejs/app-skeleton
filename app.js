'use strict';

// Initialize New Relic Node.js agent

if (process.env.NEW_RELIC_LICENSE_KEY) {
    require('newrelic');
}

// Load the libraries and run the modules for the application

let directory = __dirname + '/modules/';
let modules = [
    ['example',
        // Configuration for the module
    ]
];
let libraries = {};
require('dragonnodejs')(directory, modules, libraries);
