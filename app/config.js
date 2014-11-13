"use strict";

/*
 * Configuration for the application
 * @type {
 *      npm: '',           // Absolute path to "node_modules" directory for NPM installed libraries and modules
 *      libraries: {
 *          nodejs: {},    // Node.js included libraries as "alias: name"
 *          npm: {}        // NPM installed libraries as "alias: name"
 *      },
 *      directory: '',     // Absolute path to directory with the application/bundle modules
 *      modules: {
 *          npm: {},       // NPM installed modules with the configuration as "name: config"
 *          directory: {}  // Modules of the directory with the configuration as "name: config"
 *      }
 * }
 */

module.exports = {
    npm: __dirname + '/../node_modules/',
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
