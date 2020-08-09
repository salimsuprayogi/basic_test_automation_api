// Atlas Id , Test Automation API JS
// Author : Salim Suprayogi
// 09 Agustus 2020
const { expect } = require('chai');
const supertest = require('supertest');

const api = supertest('https://reqres.in/api');
const path = '/users';
const idUser = '/2';

// 1. Method Get Single User

function getUser() {
    return api.get(path + idUser)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');
}

describe('@get single user', () => {
    it(`@get it success get single user response`, async () => {
        const response = await api.getUser();
        console.log(response.body.data.email) // single user id 2, emailnya 
        expect(response.body.data.email).to.equal('janet.weaver@reqres.in')
        expect(response.status).to.equal(200); // mencocokan data body dengan status response
        //selan dengan expect status, diusahakan menyertakan expext data yang diambilnya
    }); // test case 1 [ it ]
});

// 2. Method Get List
function getUserList() {
    return api.get(path)
        .query({ page: 1 })
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');
}

// test suite [ describe ]
describe('@get user list', () => {
    it(`@get it success get user list response 1`, async () => {
        const response = await api.getUserList();
        //console.log(response.body) // return response dari body, data yang dikemballikan
        //expect(response.status).to.equal(200); // mencocokan data body dengan status response

        // console.log(response.body.total)
        // expect(response.body.total).to.equal(12)
        // untuk mencocokan jumlah total data di dalam body

        console.log(response.body.data[0].email)
        expect(response.body.data[0].email).to.equal('george.bluth@reqres.in')
        // untuk mencocokan response email dengan data email di dalam objek array
    }); // test case 1 [ it ]

    // it(`@get it success get user list response 2`, async () => {
    //     const response = await getUserList();
    //     expect(response.status).to.equal(200);
    // }); //test case 2 [ it ]
});

// 3. method post
const postDataBody = {
    "name": "rano", // masukan dari data yang dimiliki
    "job": "karno"
} // parameter untuk postUser

function postUser(postBody) {
    return api.post(path)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(postBody);
}

describe('@post user data', () => {
    it(`@post it success post data`, async () => {
        const response = await api.postUser(postDataBody); // butuh parameter disini
        expect(response.status).to.equal(201);
    });
});


// ini masih belum bisa
// const putDataBody = {
//     "name": "randara", // masukan dari data yang dimiliki
//     "job": "blezenki"
// } // parameter untuk postUser

// function putUser(putBody) {
//     return api.put(path)
//         .set('Accept', 'application/json')
//         .set('Content-Type', 'application/json')
//         .send(putBody);
// }

// 4. method put
const putDataBody = {
    "name": "randara",
    "job": "blezenki"
}

function putUser(putBody) {
    return api.put(path)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(putBody);
}

describe('@put user data', () => {
    it(`@put it success put data`, async () => {
        const response = await api.putUser(putDataBody); // butuh parameter disini
        console.log(response.body)
        console.log(response.body.name)
        expect(response.body.name).to.equal(putDataBody.name) // "randara"
        expect(response.status).to.equal(200); // response status
    });
});

// 5. Delete
function deleteUser() {
    return api.delete(path + idUser)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
}

describe('@delete user data', () => {
    it(`@delete it success delete data`, async () => {
        const response = await api.deleteUser(); // tidak butuh parameter
        console.log(response.body)
        expect(response.status).to.equal(204); // response status
    });
});