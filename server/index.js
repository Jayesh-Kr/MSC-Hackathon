import express from 'express';
import db from './utils/db.js';
import userrouter from './routes/UserRouter.js';
import cors from 'cors';
const app = express();
import addRandom from './addrandom.js';
addRandom();
app.use(express.json());
app.use(cors(
  {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
  }
));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', userrouter );

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});