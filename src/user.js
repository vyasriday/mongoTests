const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
})

UserSchema.methods.getName = function() {
    // this is a method available on each record and returns the name of the record it is called on 
    return this.name;
}

const User = mongoose.model('User', UserSchema);


const users = User.find()

module.exports = User;
