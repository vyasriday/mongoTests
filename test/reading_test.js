const mongoose = require('mongoose');
const User = require('../src/user');
const assert = require('assert');

describe('Readinig Users out of database', ()  => {
    
    let joe;

    beforeEach((done) => {
        joe = new User({name:'Joe'});
        joe.save()
            .then(() => done());
    })

    it('find all users named joe', (done) => {
        // let users = await User.find({name: 'Joe'});
        // console.log('Users', users); // An array of users with name Joe
        User.find({name: 'Joe'})
            .then((users) => {
                assert(users[0]._id.toString() === joe._id.toString())
                done();
            });    
    });

    it('find user with a prticular id', (done) => {
        User.findOne({ _id: joe._id })
            .then(user => {
                assert(user.name === 'Joe');
                done();
            });
    })
})