import express from 'express';
import db from './utils/db.js';
import userrouter from './routes/UserRouter.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/users', userrouter );

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});