// Method Delete Request

const supertest = require('supertest'); // request function nya

const api = supertest('https://reqres.in/api');

const path = '/users';

const idUser = '/2';


function deleteUser() {
    return api.delete(path + idUser)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
}

// export module
module.exports = {
    deleteUser
}