/**
 * Load the libraries and modules with the configuration
 * @param config
 * @returns object
 */
module.exports = function (config) {
    var services = {};
    for (var name in config.requires) {
        services[name] = require(config.requires[name]);
    }
    for (var name in config.modules) {
        require(config.directory + '/' + name)(services, config.modules[name]);
    }
    return services;
};
