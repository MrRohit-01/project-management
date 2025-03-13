import mongoose, { Document } from 'mongoose';

export interface ICustomer extends Document {
    name: string;
    email: string;
    password: string;
    address: string;
    squareFeet: number;
    contactNumber: string;
    siteLocation: string;
    buildingType: 'Commercial' | 'Residential';
    createdAt: Date;
    updatedAt: Date;
}

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    squareFeet: {
        type: Number,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    siteLocation: {
        type: String,
        required: true
    },
    buildingType: {
        type: String,
        enum: ['Commercial', 'Residential'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Customer = mongoose.model<ICustomer>('Customer', customerSchema);

export default Customer;