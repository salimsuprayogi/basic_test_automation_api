// Method Post Request

const supertest = require('supertest'); // request function nya

const api = supertest('https://reqres.in/api');

const path = '/users';


function postUser(postBody) {
    return api.post(path)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(postBody);
}

// export module
module.exports = {
    postUser
}