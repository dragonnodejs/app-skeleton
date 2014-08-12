"use strict";

/**
 * Development configuration for the application server
 * @type {
 *      npm: string,       // Absolute path to "node_modules" directory for libraries and modules installed per NPM
 *      libraries: {
 *          nodejs: {},    // Libraries included in Node.js as "alias: name"
 *          npm: {}        // Libraries installed per NPM as "alias: name"
 *      },
 *      directory: string, // Absolute path to directory with the modules of this project
 *      modules: {
 *          npm: {},       // Modules installed per NPM with configurations as "name: moduleconfig"
 *          directory: {}  // Modules of this project with configurations as "name: moduleconfig"
 *      }
 * }
 */
module.exports = {
    libraries: {},
    directory: __dirname + '/../modules/',
    modules: {
        directory: {
            example: {
                // Configuration of the module
            }
        }
    }
};
