const { app } = require('../app');
const { Url } = require('../src/models/url');
const supertest = require('supertest');

describe('Service routes', () => {
  test('Shortening route should work perfectly', async () => {
    const testRoute =
      'https://www.esiau.org/2022/08/04/marketing-goat-products/';
    const response = await supertest(app)
      .post('/shorten')
      .send({ link: testRoute });
    expect(response.status).toBe(201);
  });
});
