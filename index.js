const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: `${__dirname}/config.env` });

connectDB();

const port = process.env.PORT || 5000;

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// cors middleware
app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000'],
  credentials: true
}));

app.get('/', (req, res) => { 
  res.json({ message: 'Welcome to the RandomIdeas API' });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);



app.listen(port, () => console.log(`Server listening on ${port}`));