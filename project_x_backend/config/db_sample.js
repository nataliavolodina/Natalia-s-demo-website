// This is a sample file dont use or else mongoose will blow up

var mongoose = require( 'mongoose' ),
    dbURI = 'mongodb://YOUR SERVER URL/YOUR DATABASE NAME',
    dbOptions = {user: '<USERNAME>', pass: 'PASSWORD'},
    chefUserModel = require('../models/email_model.js');

mongoose.connect(dbURI, dbOptions);



mongoose.connection.once('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
