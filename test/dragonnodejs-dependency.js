var assert = require('assert');

describe('dragonnodejs-dependency.js', function () {

    var dependency = require('../dragonnodejs-dependency');
    var npm = './test/node_modules';

    it('should have the library in the service container after loading library', function () {
        var config = {
            libraries: { assert: 'assert' }
        };
        var services = dependency(config);
        assert.equal(typeof services.assert, 'function', 'services.assert should be a function');
    });

    it('should allow alias for a library', function () {
        var config = {
            libraries: { alias: 'assert' }
        };
        var services = dependency(config);
        assert.equal(typeof services.assert, 'undefined', 'services.assert should be undefined');
        assert.equal(typeof services.alias, 'function', 'services.alias should be a function');
    });

    it('should have much entries in the service container after loading libraries', function () {
        var config = {
            libraries: {
                assert: 'assert',
                alias: 'assert'
            }
        };
        var services = dependency(config);
        assert.equal(typeof services.assert, 'function', 'services.alias should be a function');
        assert.equal(typeof services.alias, 'function', 'services.alias should be a function');
    });

    it('should allow a npm module to define services', function () {
        var config = {
            npm: npm,
            modules: {
                npm: { defineservices: {} }
            }
        };
        var services = dependency(config);
        assert.equal(services.c, 'c', 'module should defined "c" as service "c"');
        assert.equal(services.d, 'd', 'module should defined "d" as service "d"');
    });

    it('should give a npm module the defined services', function () {
        var config = {
            npm: npm,
            modules: {
                npm: {
                    defineservices: {},
                    useservices: {}
                }
            }
        };
        var services = dependency(config);
        assert.equal(services.services.c, 'c', 'module should defined "c" as service "services.c"');
        assert.equal(services.services.d, 'd', 'module should defined "d" as service "services.d"');
    });

    it('should give a npm module his configuration', function () {
        var config = {
            npm: npm,
            modules: {
                npm: {
                    usemodule: {
                        c: 'c',
                        d: 'd'
                    }
                }
            }
        };
        var services = dependency(config);
        assert.equal(services.module.c, 'c', 'module should have "c" from configuration');
        assert.equal(services.module.d, 'd', 'module should have "d" from configuration');
    });

    it('should allow a directory module to define services', function () {
        var config = {
            directory: './test/modules',
            modules: {
                directory: { defineservices: {} }
            }
        };
        var services = dependency(config);
        assert.equal(services.a, 'a', 'module should defined "a" as service "a"');
        assert.equal(services.b, 'b', 'module should defined "b" as service "b"');
    });

    it('should give a directory module the defined services', function () {
        var config = {
            directory: './test/modules',
            modules: {
                directory: {
                    defineservices: {},
                    useservices: {}
                }
            }
        };
        var services = dependency(config);
        assert.equal(services.services.a, 'a', 'module should defined "a" as service "services.a"');
        assert.equal(services.services.b, 'b', 'module should defined "b" as service "services.b"');
    });

    it('should give a directory module his configuration', function () {
        var config = {
            directory: './test/modules',
            modules: {
                directory: {
                    usemodule: {
                        a: 'a',
                        b: 'b'
                    }
                }
            }
        };
        var services = dependency(config);
        assert.equal(services.module.a, 'a', 'module should have "a" from configuration');
        assert.equal(services.module.b, 'b', 'module should have "b" from configuration');
    });

    // TODO: Implement tests, problem: can't use the "." directory in "./test"
    xit('should use "." if directory is not given in the configuration', function () {});
});
