'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '6N84hVG2U';
 
exports.createToken = function(user){
    var payload = {
        sub:user._id,
        user:user.user,
        password:user.password,
        iat:moment().unix(),
        exp:moment().add(1,'days').unix
    };
    return jwt.encode(payload,secret);
} 