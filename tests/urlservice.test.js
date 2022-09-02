const { app } = require('../app');
const supertest = require('supertest');
const dotenv = require('dotenv');
dotenv.config({ path: './src/config/config.env' });

describe('Service routes', () => {
  test('Shortening route should work perfectly', async () => {
    const testRoute =
      'https://www.esiau.org/2022/08/04/marketing-goat-products/';
    const response = await supertest(app)
      .post(`/shorten`)
      .send({ link: testRoute });
    expect(response.status).toBe(201);
  });
});
