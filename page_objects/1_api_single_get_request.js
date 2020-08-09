// Method Get Single Request

const supertest = require('supertest'); // request function nya

const api = supertest('https://reqres.in/api');

const path = '/users';

const idUser = '/2';

// buat function nya
function getUser() {
    return api.get(path + idUser)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');
}

// export module
module.exports = {
    getUser
}
