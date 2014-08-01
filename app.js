"use strict";

var environment = process.env.NODE_ENV || 'development';
require('./dragonnode.js')(require('./configs/' + environment));
