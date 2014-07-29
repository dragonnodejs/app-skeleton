/**
 * Load the libraries and modules with the configuration
 * @param config
 * @returns object
 */
module.exports = function (config) {
    var services = {};
    if (config.libraries) {
        for (var name in config.libraries) {
            services[name] = require(config.libraries[name]);
        }
    }
    if (config.modules) {
        if (config.modules.npm) {
            for (var name in config.modules.npm) {
                require(name)(services, config.modules.npm[name]);
            }
        }
        if (config.modules.directory) {
            var directory = config.directory || '.';
            for (var name in config.modules.directory) {
                require(directory + '/' + name)(services, config.modules.directory[name]);
            }
        }
    }
    return services;
};
