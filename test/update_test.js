const assert = require('assert');
const User = require('../src/user');
const assertFunction = require('./test_helper');

describe('Updating Records', () => {
    
    let joe;
    
    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    })

   

    it('instance set and save', (done) => {
        joe.set({name: 'Hridayesh'}); // set the different name to record. this does not save it to database;
        assertFunction(joe.save(), done);
    });

    it('instance update method', (done) => {
       assertFunction(joe.update({name: 'Hridayesh'}), done);
    })

    it('A model class can update', (done) => {
        assertFunction(User.updateOne({name: 'Joe'}, {name: 'Hridayesh'}), done)
    })

    it('A model class can update one record', (done) => {
        assertFunction(User.findOneAndUpdate({name: 'Joe'}, {name: 'Hridayesh'}), done);
    })

    it('A model class can find by id and update', (done) => {
        assertFunction(User.findByIdAndUpdate(joe._id, {name: 'Hridayesh'}), done);
    })
});