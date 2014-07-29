var environment = process.env.NODE_ENV || 'development';
require('./dragonnodejs-dependency')(require('./configs/' + environment));
