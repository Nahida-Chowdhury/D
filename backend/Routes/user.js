import express from 'express';
import {
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser,
} from '../Controllers/userController.js';

import { authenticete, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', authenticete, restrict(['patient']), getSingleUser);
router.get('/', authenticete, restrict(['admin']), getAllUser);
router.put('/:id', authenticete, restrict(['patient']), updateUser);
router.delete('/:id', authenticete, restrict(['patient']), deleteUser);

export default router;