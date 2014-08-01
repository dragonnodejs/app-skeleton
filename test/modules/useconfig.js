"use strict";

/**
 * Testmodule to use the configuration of the module
 * @param moduleconfig
 * @param services
 */
module.exports = function (moduleconfig, services) {
    services.moduleconfig = {
        a: moduleconfig.a,
        b: moduleconfig.b
    };
};
