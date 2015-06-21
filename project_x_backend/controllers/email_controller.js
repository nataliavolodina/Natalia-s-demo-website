var EmailModel = require('../models/email_model'),
    mongoose = require('mongoose'),
    Email = mongoose.model('Email');

function EmailController(req, res, next) {
  this.getEmails = function() {
    Email.find('')
    .exec(function (err, users) {
      if (!err) {
        res.send(200, users);
      }
    });
  };

  this.addNewEmail = function() {
    email = new Email();
    console.log(req);
    email.message = req.body.message;
    email.name = req.body.name;
    email.email = req.body.email;
    email.save(function (err) {
      if (!err) {
        console.log('user saved');
        res.send(200, {saved: true});
        return;
      }

      res.send(500, err);
    });
  };
}

module.exports = EmailController;
