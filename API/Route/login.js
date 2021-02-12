import express from 'express';
import { checkUser } from '../Controller/login.js'

const router = express.Router();

router.post('/', checkUser);

export default router;