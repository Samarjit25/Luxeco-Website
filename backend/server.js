
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for your frontend domain
app.use(cors({
  origin: 'https://luxeco-website.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// OR: To allow all origins (for testing only)
// app.use(cors());

app.use(express.json());

// your routes here
app.post('/api/v1/reservation/send', (req, res) => {
  // your handler
});
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);

})