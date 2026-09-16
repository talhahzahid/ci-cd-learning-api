import express from 'express';
import itemsRouter from './routes/item.js';

const app = express ();

app.use (express.json ());

// Health check endpoint
app.get ('/health', (req, res) => {
  res.status (200).json ({status: 'ok', uptime: process.uptime ()});
});

app.use ('/items', itemsRouter);

// 404 handler
app.use ((req, res) => {
  res.status (404).json ({error: 'Route not found'});
});

export default app;
