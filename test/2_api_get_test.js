// Test Method Get 

const { expect } = require('chai'); // dibutuhkan chai nya

// Ambil dari file page_object
const api = require('../page_objects/2_api_get_request');

describe('@get user list', () => {
    it(`@get it success get user list body response 1`, async () => {
        const response = await api.getUserList();
        console.log(response.body) // return response dari body, data yang dikemballikan
        expect(response.status).to.equal(200); // mencocokan data body dengan status response
    }); // test case 1 [ it ]

    it(`@get it success get user list status response 2`, async () => {
        const response = await api.getUserList();
        expect(response.status).to.equal(200); // dibuat failed, asalnya return code 200
    }); // test case 2 [ it ]

    it(`@get it success get user list total body response 3`, async () => {
        const response = await api.getUserList();
        console.log(response.body.total)
        expect(response.body.total).to.equal(12)
        // untuk mencocokan jumlah total data di dalam body
    }); // test case 3 [ it ]

    it(`@get it success get user list email pertama response 4`, async () => {
        const response = await api.getUserList();
        console.log(response.body.data[0].email)
        expect(response.body.data[0].email).to.equal('george.bluth@reqres.in')
        // untuk mencocokan response email dengan data email di dalam objek array
    }); // test case 4 [ it ]
});
