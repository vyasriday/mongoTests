const mongoose = require('mongoose');
const User = require('../src/user');

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


