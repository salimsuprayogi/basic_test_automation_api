// Test Method Post

const { expect } = require('chai'); // dibutuhkan chai nya

// Ambil dari file page_object
const api = require('../page_objects/3_api_post_request');

const postDataBody = {
    "name": "rano", // masukan dari data yang dimiliki
    "job": "karno"
} // parameter untuk postUser

describe('@post user data', () => {
    it(`@post it success post data`, async () => {
        const response = await api.postUser(postDataBody); // butuh parameter disini
        expect(response.status).to.equal(201);
    });
});