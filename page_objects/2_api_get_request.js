// Method Get List Request

const supertest = require('supertest'); // request function nya

const api = supertest('https://reqres.in/api');

const path = '/users';

function getUserList() {
    return api.get(path)
        .query({ page: 1 })
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');
}

// export module
module.exports = {
    getUserList
}
