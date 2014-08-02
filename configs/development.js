"use strict";

/**
 * Development configuration for the application server
 * @type {
 *      libraries: {},     // Libraries installed per NPM as "alias: name"
 *      npm: string,       // Path to "node_modules" directory for libraries and modules installed per NPM
 *      directory: string, // Path to directory with the modules of this project
 *      modules: {
 *          npm: {},       // Modules installed per NPM with configurations as "name: moduleconfig"
 *          directory: {}  // Modules of this project with configurations as "name: moduleconfig"
 *      }
 * }
 */
module.exports = {
    directory: __dirname + '/../modules/',
    modules: {
        directory: {
            example: {
                // Configuration of the module
            }
        }
    }
};
