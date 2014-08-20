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
- Extend the configuration for the different environments, for example "./configs/development.js":
```javascript
module.exports = {
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
