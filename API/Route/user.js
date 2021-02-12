import express from 'express';
import { getUsers, getUser, postUser, updateUser, deleteUser } from '../Controller/user.js'

const router = express.Router();

router.get('/', getUsers);
router.get('/:userId', getUser);
router.post('/', postUser);
router.patch('/:userId', updateUser);
router.delete('/:userId', deleteUser);


export default router;