import request from 'supertest';
import app from '../src/app.js';

describe ('Health check', () => {
  it ('GET /health returns 200 and status ok', async () => {
    const res = await request (app).get ('/health');
    expect (res.status).toBe (200);
    expect (res.body.status).toBe ('ok');
  });
});

describe ('Items API', () => {
  it ('GET /items returns an array', async () => {
    const res = await request (app).get ('/items');
    expect (res.status).toBe (200);
    expect (Array.isArray (res.body)).toBe (true);
  });

  it ('POST /items creates a new item', async () => {
    const res = await request (app).post ('/items').send ({name: 'Laptop'});
    expect (res.status).toBe (201);
    expect (res.body.name).toBe ('Laptop');
  });

  it ('POST /items without name returns 400', async () => {
    const res = await request (app).post ('/items').send ({});
    expect (res.status).toBe (400);
  });
});
