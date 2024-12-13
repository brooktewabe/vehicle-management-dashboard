const app = require('../index');
const axios = require('axios');

const assert = require('assert').strict;
const { vehicles } = require('../services/vehicleService'); 

let server;

describe("Test CRUD API", function () {
    before(() => {
        server = app.listen(3000);
    })

    after(() => {
        server.close()
    })
    it("Test Get", async function () {
        let res = await axios.get('http://localhost:3000/api/vehicles')
        assert.equal(res.status, 200)
    });

    it("Test Post Validation All empty", async function () {
        let err;
        try {
            
            let res = await axios.post('http://localhost:3000/api/vehicles', {})
        } catch(e) {
            err = e;
        }
        console.log(err.response.data);
        assert.equal(err?.response?.status, 400)

    }); 


    it("Test non existing endpoint", async function () {
        let err;
        try {
            let res = await axios.get('http://localhost:3000/test/non-exiting/endpoint')
        } catch (e) {
            err = e;
        }
        assert.equal(err.response.status, 404)

    });



});
