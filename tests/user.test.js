/**
 * @file user.test.js
 * @description Tests for user routes
 * @github oaslananka
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../backend/server');
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
    describe('/POST register', () => {
        it('it should register a new user', (done) => {
            let user = {
                name: 'Test User',
                email: 'testuser@example.com',
                password: '123456'
            }
            chai.request(server)
                .post('/api/users/register')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eql('User registered successfully');
                    done();
                });
        });
    });

    describe('/POST login', () => {
        it('it should login the user', (done) => {
            let user = {
                email: 'testuser@example.com',
                password: '123456'
            }
            chai.request(server)
                .post('/api/users/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                    done();
                });
        });
    });
});
