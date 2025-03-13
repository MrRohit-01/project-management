import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Customer, { ICustomer } from '../models/Customer';

export const registerCustomer = async (req: Request, res: Response) => {
    try {
        const customerExists = await Customer.findOne({ email: req.body.email });
        if (customerExists) {
            return res.status(400).json({ message: 'Customer already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const customer = await Customer.create({
            ...req.body,
            password: hashedPassword
        });

        const token = jwt.sign(
            { id: customer._id },
            process.env.JWT_SECRET as string,
            { expiresIn: '30d' }
        );

        res.status(201).json({
            _id: customer._id,
            name: customer.name,
            email: customer.email,
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const loginCustomer = async (req: Request, res: Response) => {
    try {
        const customer = await Customer.findOne({ email: req.body.email }) as ICustomer;
        if (!customer) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(req.body.password, customer.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: customer._id },
            process.env.JWT_SECRET as string,
            { expiresIn: '30d' }
        );

        res.json({
            _id: customer._id,
            name: customer.name,
            email: customer.email,
            token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getCustomerProfile = async (req: Request, res: Response) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const customer = await Customer.findById(req.user.id).select('-password');
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.find().select('-password');
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const getCustomerById = async (req: Request, res: Response) => {
    try {
        if (!req.user?.id) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        const customer = await Customer.findById(req.params.id).select('-password');
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};