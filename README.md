# DragonNode.js
Framework to develop modular and testable Node.js applications
- Separate configuration and implementation of modules
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
/*
 * description of the module
 * @example
    example: {}
 */

module.exports = function (config, services) {
    // implementation of the module
};
```
- Extend the configuration for the different environments, for example "./configs/development.js":
```javascript
module.exports = {
    modules: {
        directory: {
            example: {
                // configuration of the module
            }
        }
    }
};
```

## Changelog

### 2.2.0
Minor:
- Change: Remove the environment configurations

### 2.1.0
Minor:
- Feature: Add default configuration for production environment which inherit from the development configuration
Trivial:
- Change: Remove the entries from ".gitignore" for PhpStorm. So if you using PhpStorm in your project you must define
itself

### 2.0.0
Major:
- Feature: Add define libraries included in Node.js. So need to split the library configuration to "nodejs" and "npm".
Also need to define the library configuration as empty object if no library is needed instead of not define the complete
library configuration
Trivial:
- Feature: Use specific compatible versions of the library to avoid automatic update to new major version if available
