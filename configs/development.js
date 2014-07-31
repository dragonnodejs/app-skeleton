/**
 * Development configuration for the application server
 * @type {
 *      libraries: {},     // The libraries installed per NPM as "{ alias: name }"
 *      npm: string,       // The path to "node_modules" directory used for the libraries and modules installed per NPM
 *      directory: string, // The path to the directory with the modules of this project
 *      modules: {
 *          npm: {},       // The modules installed per NPM with his configurations as "{ name: config }"
 *          directory: {}  // The modules of this project with his configurations as "{ name: config }"
 *      }
 * }
 */
module.exports = {
    libraries: {},
    directory: './modules',
    modules: {
        npm: {},
        directory: {
            example: {
                // Configuration of the module
            }
        }
    }
};
