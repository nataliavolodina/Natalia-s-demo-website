var restify = require('restify'),
    config = require('../config/application'),
    EmailController = require('../controllers/email_controller');

var rateLimit = restify.throttle({
  burst: config.limiter.defaultBurstRate,
  rate: config.limiter.defaultRatePerSec,
  ip: true
});

function ChefUserRoutes(api) {
  api.post('/send_email', rateLimit, function(req, res, next) {
    var ctrl = new EmailController(req, res, next);
    ctrl.addNewEmail();
  });

  api.get('/emails', rateLimit, function(req, res, next) {
    var ctrl = new EmailController(req, res, next);
    ctrl.getEmails();
  });

}

module.exports.routes = ChefUserRoutes;
