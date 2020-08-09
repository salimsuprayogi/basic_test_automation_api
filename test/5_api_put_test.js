// Test Method Delete
const { expect } = require('chai'); // dibutuhkan chai nya

// Ambil dari file page_object
const api = require('../page_objects/5_api_delete_request');


describe('@delete user data', () => {
    it(`@delete it success delete data`, async () => {
        const response = await api.deleteUser(); // tidak butuh parameter
        console.log(response.body)
        expect(response.status).to.equal(204); // response status
    });
});