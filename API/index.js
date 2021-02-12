import express from "express";
import bodyParser from "body-parser";

import userRoutes from './Route/user.js';
import userLogin from './Route/login.js'

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '1mb' }));
app.use(express.static('../Frontpage'));
app.use(bodyParser.json()); 

app.use('/user', userRoutes);
app.use('/login', userLogin);

app.get('/', (req, res) => { res.send('Hello, you have arrived at home page!') });
app.listen(PORT, () => console.log(`Listening to port ${PORT}. Access at: http://localhost:${PORT}`))
