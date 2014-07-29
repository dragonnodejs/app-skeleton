![Travis CI](https://travis-ci.org/dragonnodejs/skeleton.svg?branch=master "Travis CI")

# DragonNodejs
- Develop modular and testable Node.js applications
- Separate configuration and implementation of modules
- Allow to define configurations depends on the environment
- Service container to use services from other modules or define own services in the modules
- Allow to mock standard libraries and services for testing modules as independent units
- Share: Publish own modules or use distributed modules from other developers

## Installation
- Fork and/or clone the skeleton repository

## Define new modules
- Add new file or directory to the module directory with the name of the new module, for example "./modules/module.js":
```javascript
/**
 * Module for the application server
 * @param services
 * @param module
 */
module.exports = function(services, module) {
    // Implementation for the module
};
```
- Add the configuration for the different environments, for example "./configs/development.js":
```javascript
/**
 * Development configuration for the application server
 * @type {{libraries: {}, directory: string, modules: {npm: {}, directory: {}}}}
 */
module.exports = {
    libraries: {},
    directory: './modules',
    modules: {
        npm: {},
        directory: {
            module: {
                // Configuration for the module
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
