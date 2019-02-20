const User = require('../src/user');
const assert = require('assert'); // available in mocha

describe('Creating Records', () => {

    it('saves a user', (done) => {
        //we have created a new instance of User but it is not saved automatically
        const joe =  new User({name: 'Hridayesh'}); 
        console.log(joe.getName());
        /*
            Whenever a new document is created then it gets a 'isNew' flag created by mongoose which is set to true at first
            Once the document gets saved in the database the isNew is set to false 
        */
        joe.save()
            .then(() =>{
               assert(!joe.isNew); // isNew set to false here
               done();
            });
    })    

});
