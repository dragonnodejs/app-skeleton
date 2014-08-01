"use strict";

/**
 * Testmodule to use the configuration of the module
 * @param config
 * @param services
 */
module.exports = function (config, services) {
    services.config = {
        a: config.a,
        b: config.b
    };
};
