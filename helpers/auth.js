'use strict';

// Load core modules
var req = require('request');

var auth = {};

// var options = {
//   method: 'post',
//   body: {
//     'email': 'dev@loansolutions.ph',
//     'password': 'lsphadmin',
//   },
//   json: true,
//   url: 'http://localhost:8005/auth/login'
// }

// req(options, function (error, response, body) {
//   if( error ) {
//     return console.log(error);
//   }

//   auth.token = body.token;
//   console.log(body.token);
// });

var options = {
  method: 'get',
  url: 'http://localhost:8005/oldleads',
  headers: {
    'Accept': 'application/json',
    'Authentication' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImE3ZDg1MzlkLTJkZTUtNDdlYy05MjZkLTIwN2Q2MWIwOWVkYSIsInBhc3N3b3JkIjoiJDJhJDA4JEQxV21ORnNLUlBRQUVTUGQ1ZmhHWk9TbXhnZHhBUTlLQk9uek56Sk83V3RWZ2ZVbk9aQ0RPIn0.5lwCPYEy28f8cmzlOaxJJbJWcu2lj7NWE0SGUQDONcQ'
  }
}

req(options, function (error, response, body) {
  if( error ) {
    return console.log(error);
  }

    console.log(body);
});
