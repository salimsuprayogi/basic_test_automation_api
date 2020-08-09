// Method Put Request

const supertest = require('supertest'); // request function nya

const api = supertest('https://reqres.in/api');

const path = '/users';


function putUser(putBody) {
    return api.put(path)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(putBody);
}

// export module
module.exports = {
    putUser
}