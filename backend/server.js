import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'https://luxeco-website.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

app.post('/api/v1/reservation/send', (req, res) => {
  res.json({ message: 'Reservation received!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
