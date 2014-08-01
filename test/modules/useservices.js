"use strict";

/**
 * Testmodule to use services
 * @param moduleconfig
 * @param services
 */
module.exports = function (moduleconfig, services) {
    services.services = {
        a: services.a,
        b: services.b
    };
};
