const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should respond with "Hello, world!"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, world!');
    expect(response.statusCode).toBe(200);
  });
});
