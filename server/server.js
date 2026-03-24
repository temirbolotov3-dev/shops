import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import orderRoutes from './routes/orders.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('API иштеп жатат 🚀');
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.log('Mongo error ❌', err));

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000 🚀');
});