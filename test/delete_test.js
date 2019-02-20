const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
    
    let joe;
    
    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });
    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({name: 'Joe'}))
            .then(user => {
                // when no record is found the findOne returns null
                assert(user === null);
                done();
            })
    })

    it('class method remove', (done) => {
        // used to remove multiple records at once based on some criteria
        // User.remove({name: 'Joe'})
        //     .then(() =>  done());
       
        // remove is deprecated now and hence deleteMany should be used
        User.deleteMany({name: 'Joe'})
            .then(() =>  done());
       
    })

    it('class method findAndRemove', (done) => {
        // pass something which is unique to the document we want to delete
        // User.findOneAndRemove({name: 'Joe'})
        //     .then(() => User.findOne({name: 'Joe'}))
        //     .then((user) => assert(user === {}));
        
        // findOneAndRemove is deprecated, use
        User.findOneAndDelete({name: 'Joe'})
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method findByIdAndRemove', (done) => {
        User.findByIdAndDelete(joe._id)
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done()
            })
    })
    
});