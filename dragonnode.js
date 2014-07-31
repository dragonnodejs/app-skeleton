/**
 * Load the libraries and modules with the configuration
 * @param config
 * @param services
 */
module.exports = function (config, services) {
    services = services || {};
    var npm = '';
    if (config.npm) {
        npm = config.npm + '/';
    }
    if (config.libraries) {
        for (var name in config.libraries) {
            services[name] = require(npm + config.libraries[name]);
        }
    }
    if (config.modules) {
        if (config.modules.npm) {
            for (var name in config.modules.npm) {
                require(npm + name)(config.modules.npm[name], services);
            }
        }
        if (config.modules.directory) {
            var directory = config.directory || '.';
            for (var name in config.modules.directory) {
                require(directory + '/' + name)(config.modules.directory[name], services);
            }
        }
    }
};
