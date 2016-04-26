#!/usr/bin/env node
var crypto = require('crypto');

  var genRandomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0,length); 
};


var sha512 = function(password, salt){
    var hash = crypto.createHmac('sha512', salt); 
    hash.update(password);
    var value = hash.digest('hex');
    return {
        salt:salt,
        passwordHash:value
    };
};

module.exports = function saltHashPassword(userpassword) {
    var salt = genRandomString(16); 
    var passwordData = sha512(userpassword, salt);
    console.log('userPassword = '+userpassword);
        console.log('passwordhash = '+passwordData.passwordHash);
    console.log('\nSalt = '+passwordData.salt);
};

//saltHashPassword(process.argv[2]);
//saltHashPassword(process.argv[2]);