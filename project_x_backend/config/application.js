var env = process.env.NODE_ENV,
    packageJson = require('../package.json'),
    path = require('path');



exports.api = {
  name: packageJson.name,
  version: packageJson.version
};

// Make this more dynamic in the future
exports.environment = {
  name: 'development',
  port: 8000,
  secretKey: ''
};

exports.limiter = {
  defaultBurstRate: 50,
  defaultRatePerSec: 0.5,
};
