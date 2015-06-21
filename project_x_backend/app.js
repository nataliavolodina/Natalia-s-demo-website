var restify = require('restify'),
    config = require('./config/application'),
    db = require('./config/db'),
    fs = require('fs');

// Server instance with registered options
var api = restify.createServer({
  name: config.api.name,
  formatters: {
    'application/json': function(req, res, body) {
      return JSON.stringify(body);
    }
  }
});

api.use(restify.acceptParser(api.acceptable));
api.use(restify.bodyParser());
api.use(restify.queryParser());
api.use(restify.authorizationParser());

// Cors
api.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  return next();
});

// Iterates through all ./routes files to init the routes for use in the api
fs.readdirSync('./routes').forEach(function(curFile) {
  if (curFile.substr(-3) === '.js') {
    var route = require('./routes/' + curFile);
    route.routes(api);
  }
});

api.listen(config.environment.port, function() {
  var dashChars = '+' + Array(32 + api.url.length + config.api.name.length).join('-') + '+';
  console.log(dashChars);
  console.log('| Application `%s` is running at %s |', config.api.name, api.url);
  console.log(dashChars);
});
