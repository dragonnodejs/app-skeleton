"use strict";

/**
 * Load the libraries and modules with the configuration
 * @param environmentconfig
 * @param services
 */
module.exports = function (environmentconfig, services) {
    services = services || {};
    var npm = environmentconfig.npm || '';

    for (var name in environmentconfig.libraries) {
        services[name] = require(npm + environmentconfig.libraries[name]);
    }

    for (var name in environmentconfig.modules.npm) {
        require(npm + name)(environmentconfig.modules.npm[name], services);
    }

    var directory = environmentconfig.directory || '.';
    for (var name in environmentconfig.modules.directory) {
        require(directory + name)(environmentconfig.modules.directory[name], services);
    }
};
