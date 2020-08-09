//Test Method Put
const { expect } = require('chai'); // dibutuhkan chai nya

// Ambil dari file page_object
const api = require('../page_objects/4_api_put_request');

const putDataBody = {
    "name": "randara",
    "job": "blezenki"
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