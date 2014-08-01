"use strict";

/**
 * Testmodule to use services
 * @param config
 * @param services
 */
module.exports = function (config, services) {
    services.services = {
        a: services.a,
        b: services.b
    };
};
