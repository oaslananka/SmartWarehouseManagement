/**
 * @file inventory.test.js
 * @description Tests for inventory routes
 * @github oaslananka
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../backend/server');
const should = chai.should();
const Inventory = require('../backend/models/Inventory');

chai.use(chaiHttp);

describe('Inventory', () => {
    beforeEach((done) => {
        Inventory.remove({}, (err) => {
            done();
        });
    });

    describe('/POST inventory', () => {
        it('it should add a new item to inventory', (done) => {
            let item = {
                itemName: 'Test Item',
                quantity: 10,
                location: 'A1'
            }
            chai.request(server)
                .post('/api/inventory')
                .send(item)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eql('Item added successfully');
                    done();
                });
        });
    });

    describe('/GET inventory', () => {
        it('it should GET all the items', (done) => {
            chai.request(server)
                .get('/api/inventory')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
});
