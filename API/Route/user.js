import express from 'express';
import { getUsers, getUser, postUser, updateUser, deleteUser } from '../Controller/user.js'

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;