/**
 * Load the libraries and modules with the configuration
 * @param config
 * @returns object
 */
module.exports = function (config) {
    var services = {};
    for (var name in config.libraries) {
        services[name] = require(config.libraries[name]);
    }
    for (var name in config.modules.npm) {
        require(name)(services, config.modules.npm[name]);
    }
    for (var name in config.modules.directory) {
        require(config.directory + '/' + name)(services, config.modules.directory[name]);
    }
    return services;
};
