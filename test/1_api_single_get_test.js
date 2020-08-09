// Test Method Get Single

const { expect } = require('chai'); // dibutuhkan chai nya

// Ambil dari file page_object
const api = require('../page_objects/1_api_single_get_request');

// describe = Test Suite
// @ = untuk menandai nama test suite
describe('@get single user', () => {
    it(`@get it success get single user response`, async () => {
        const response = await api.getUser();
        console.log(response.body.data.email) // single user id 2, emailnya 
        expect(response.body.data.email).to.equal('janet.weaver@reqres.in')
        expect(response.status).to.equal(200); // mencocokan data body dengan status response
        //selan dengan expect status, diusahakan menyertakan expext data yang diambilnya
    }); // it = Test Case
});
