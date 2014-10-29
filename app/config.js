"use strict";

/*
 * Configuration for the application
 * @type {
 *      npm: string,       // Absolute path to "node_modules" directory for libraries and modules installed per NPM
 *      libraries: {
 *          nodejs: {},    // Libraries included in Node.js as "alias: name"
 *          npm: {}        // Libraries installed per NPM as "alias: name"
 *      },
 *      directory: string, // Absolute path to directory with the modules of this project
 *      modules: {
 *          npm: {},       // Modules installed per NPM with their configuration as "name: config"
 *          directory: {}  // Modules of this project with their configuration as "name: config"
 *      }
 * }
 */

module.exports = {
    libraries: {},
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            example: {
                // Configuration for the module
            }
        }
    }
};
