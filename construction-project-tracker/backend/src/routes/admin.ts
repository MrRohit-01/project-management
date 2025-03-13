import express from 'express';
import { registerAdmin, loginAdmin, getProfile } from '../controllers/adminController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// Protected routes
router.get('/profile', authMiddleware, getProfile);

export default router;