var mongoose = require('mongoose');
// Creates a new Mongoose Schema object
var Schema = mongoose.Schema;

// Collection to hold users
var EmailSchema = new Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
    name: {type: String, required: true}
  },{
    collection: 'emails'
  }
);

// Creates the Model for the User Schema
var Email = mongoose.model('Email', EmailSchema);

var getAllUsers = function getAllUsers() {

};

var createNewUser = function createNewUser() {

};

module.export =  {
 getAllUsers: getAllUsers,
 createNewUser: createNewUser
};
