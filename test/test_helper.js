const mongoose = require('mongoose');
const User = require('../src/user');
const assert = require('assert');

module.exports = function assertFunction(operation, callback) {
    operation
        .then(() => User.findOne({name: 'Hridayesh'}))
        .then((user) => {
            assert(user.name === 'Hridayesh')
            callback();
        })
}

before((done) => {

    mongoose.connect(
        'mongodb://localhost/users_test', 
        {useNewUrlParser: true }
    );
    mongoose.connection
        .once('open', () => done())
        .on('error', (error) => console.log('Error', error));
})


beforeEach((done) => {
    // drop the users collection
    mongoose.connection.collections.users.drop();
    done();
});


