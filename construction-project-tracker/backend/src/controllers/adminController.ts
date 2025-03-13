import { Request, Response } from 'express';
import Customer from '../models/Customer';
import Project, { IProject } from '../models/Project';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin';

// Custom error interface
interface MongoError extends Error {
    code?: number;
    keyPattern?: { [key: string]: number };
    keyValue?: { [key: string]: string };
}

// Add a new customer
export const addCustomer = async (req: Request, res: Response) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).json(customer);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

// Update project status
export const updateProjectStatus = async (req: Request, res: Response) => {
    try {
        const { projectId, status } = req.body;
        const project = await Project.findByIdAndUpdate(
            projectId, 
            { status }, 
            { new: true }
        ) as IProject | null;

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

// @desc    Register admin
// @route   POST /api/admin/register
// @access  Public
export const registerAdmin = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        // Check if admin already exists
        const adminExists = await Admin.findOne({ email });
        if (adminExists) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create admin
        const admin = await Admin.create({
            name,
            email,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET as string,
            { expiresIn: '30d' }
        );

        res.status(201).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token
        });
    } catch (error: unknown) {
        const mongoError = error as MongoError;
        if (mongoError.code === 11000) {
            res.status(400).json({ message: 'Email already exists' });
        } else if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'An unexpected error occurred' });
        }
    }
};

// @desc    Login admin
// @route   POST /api/admin/login
// @access  Public
export const loginAdmin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Check if admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: admin._id },
            process.env.JWT_SECRET as string,
            { expiresIn: '30d' }
        );

        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get admin profile
// @route   GET /api/admin/profile
// @access  Private
export const getProfile = async (req: Request, res: Response) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'Not authorized, no token' });
        }

        const admin = await Admin.findById(req.user.id).select('-password');
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.json(admin);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Server error' });
        }
    }
};

// @desc    Update admin profile
// @route   PUT /api/admin/profile
// @access  Private
export const updateProfile = async (req: Request, res: Response) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'Not authorized, no token' });
        }

        const admin = await Admin.findById(req.user.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        admin.name = req.body.name || admin.name;
        admin.email = req.body.email || admin.email;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(req.body.password, salt);
        }

        const updatedAdmin = await admin.save();

        res.json({
            _id: updatedAdmin._id,
            name: updatedAdmin.name,
            email: updatedAdmin.email
        });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Server error' });
        }
    }
};

// Other admin-related functions can be added here