# DragonNode.js
Framework to develop modular and testable Node.js applications
- Separate configuration and implementation of modules
- Allow to define configurations depends on the environment
- Service container to use services from other modules or define new services in the modules
- Allow to mock standard libraries and services for testing modules as independent units
- Group modules to bundles and share them with other developers

## Installation
- Fork and/or clone the skeleton repository
- Execute "npm install"
- Start the application with "npm start"

## Define new module
- Add new file or directory to the module directory with the name of the new module, for example "./modules/example.js":
```javascript
/**
 * Example module for the application server
 * @param moduleconfig
 * @param services
 */
module.exports = function (moduleconfig, services) {
    // Implementation of the module
};
```
- Add the configuration for the different environments, for example "./configs/development.js":
```javascript
/**
 * Development configuration for the application server
 * @type {
 *      libraries: {
 *          nodejs: {},    // Libraries included in Node.js as "alias: name"
 *          npm: {}        // Libraries installed per NPM as "alias: name"
 *      },
 *      npm: string,       // Absolute path to "node_modules" directory for libraries and modules installed per NPM
 *      directory: string, // Absolute path to directory with the modules of this project
 *      modules: {
 *          npm: {},       // Modules installed per NPM with configurations as "name: config"
 *          directory: {}  // Modules of this project with configurations as "name: config"
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
```

## Define new environment
- Add new configuration with the environment name into the "./configs/" directory
- Start the application with the new environment
```
NODE_ENV=environment npm start
```
