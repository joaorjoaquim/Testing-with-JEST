const request = require('supertest');
const app = require('./server');

describe('Test My server', () => {
    it('Get main route', async () => {
        const response = await request(app).get('/')

        expect(response.statusCode).toEqual(200)
        expect(response.body).toHaveProperty('author')
        expect(response.body).toHaveProperty('message')
    })
})