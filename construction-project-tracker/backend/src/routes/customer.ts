import express from 'express';
import { 
    registerCustomer, 
    loginCustomer, 
    getCustomerProfile, 
    getAllCustomers,
    getCustomerById 
} from '../controllers/customerController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', registerCustomer);
router.post('/login', loginCustomer);

// Protected routes
router.get('/profile', authMiddleware, getCustomerProfile);
router.get('/', authMiddleware, getAllCustomers);
router.get('/:id', authMiddleware, getCustomerById);

export default router;