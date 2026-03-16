import express from 'express';
import {
    getRentals,
    getRentalById,
    createRental,
} from '../controllers/rentalController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getRentals);
router.get('/:id', getRentalById);
router.post('/', protect, createRental);

export default router;
