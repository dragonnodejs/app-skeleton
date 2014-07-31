[![Travis CI](https://travis-ci.org/dragonnodejs/skeleton.svg?branch=master "Travis CI")]
    (https://travis-ci.org/dragonnodejs/skeleton)

# DragonNode.js
Develop modular and testable Node.js applications
- Separate configuration and implementation of modules
- Allow to define configurations depends on the environment
- Service container to use services from other modules or define new services in the modules
- Allow to mock standard libraries and services for testing modules as independent units
- Use modules from other developers or publish new modules

## Installation
- Fork and/or clone the skeleton repository

## Define new module
- Add new file or directory to the module directory with the name of the new module, for example "./modules/example.js":
```javascript
/**
 * Example module for the application server
 * @param config
 * @param services
 */
module.exports = function(config, services) {
    // Implementation of the module
};
```
- Add the configuration for the different environments, for example "./configs/development.js":
```javascript
/**
 * Development configuration for the application server
 * @type {
 *      libraries: {},     // The libraries installed per NPM as "{ alias: name }"
 *      npm: string,       // The path to "node_modules" directory used for the libraries and modules installed per NPM
 *      directory: string, // The path to the directory with the modules of this project
 *      modules: {
 *          npm: {},       // The modules installed per NPM with the configurations as "{ name: config }"
 *          directory: {}  // The modules of this project with the configurations as "{ name: config }"
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
```

## Define new environments
- Add new configuration with the environment name into the "./configs" directory
- Start the application with the new environment
```
NODE_ENV=environment npm start
```
