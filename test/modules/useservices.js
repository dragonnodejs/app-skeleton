/**
 * Testmodule to use services
 * @param services
 * @param module
 */
module.exports = function(services) {
    services.services = {
        a: services.a,
        b: services.b
    };
};
