import express from "express";
import bodyParser from "body-parser";

import userRoutes from './Route/user.js';

const app = express();
const PORT = 3000;


app.use(express.static('../Frontpage'));
app.use(bodyParser.json()); 
app.use('/user', userRoutes);

app.get('/', (req, res) => { res.send('Hello, you have arrived at home page!') });
app.listen(PORT, () => console.log(`Listening to port ${PORT}. Access at: http://localhost:${PORT}`))
