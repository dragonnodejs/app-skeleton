"use strict";

/*
 * configuration for the application
 * @type {
 *      npm: string,       // absolute path to "node_modules" directory for libraries and modules installed per NPM
 *      libraries: {
 *          nodejs: {},    // libraries included in Node.js as "alias: name"
 *          npm: {}        // libraries installed per NPM as "alias: name"
 *      },
 *      directory: string, // absolute path to directory with the modules of this project
 *      modules: {
 *          npm: {},       // modules installed per NPM with their configuration as "name: config"
 *          directory: {}  // modules of this project with their configuration as "name: config"
 *      }
 * }
 */

module.exports = {
    libraries: {},
    directory: __dirname + '/modules/',
    modules: {
        directory: {
            example: {
                // configuration of the module
            }
        }
    }
};
