import express from 'express';
import {
    updateDoctor,
    deleteDoctor,
    getAllDoctor,
    getSingleDoctor,
    getDoctorProfile,
} from '../Controllers/doctorController.js';

import { authenticete, restrict } from '../auth/verifyToken.js';

import reviewRouter from './review.js'

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter)

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticete, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticete, restrict(['doctor']), deleteDoctor);
router.get('/profile/me', authenticete, restrict(['doctor']), getDoctorProfile);

export default router;