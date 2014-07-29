var assert = require('assert');

describe('dragonnodejs-dependency.js', function () {

    var dependency = require('../dragonnodejs-dependency');

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

    it('should allow a module to define services', function () {
        var config = {
            directory: './test/modules',
            modules: { defineservices: {} }
        };
        var services = dependency(config);
        assert.equal(services.a, 'a', 'module should defined "a" as service "a"');
        assert.equal(services.b, 'b', 'module should defined "b" as service "b"');
    });

    it('should give a module the defined services', function () {
        var config = {
            directory: './test/modules',
            modules: {
                defineservices: {},
                useservices: {}
            }
        };
        var services = dependency(config);
        assert.equal(services.services.a, 'a', 'module should defined "a" as service "used.a"');
        assert.equal(services.services.b, 'b', 'module should defined "b" as service "used.b"');
    });

    it('should give a module his configuration', function () {
        var config = {
            directory: './test/modules',
            modules: {
                usemodule: {
                    a: 'a',
                    b: 'b'
                }
            }
        };
        var services = dependency(config);
        assert.equal(services.module.a, 'a', 'module should have "a" from configuration');
        assert.equal(services.module.b, 'b', 'module should have "b" from configuration');
    });
});
