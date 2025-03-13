import mongoose, { Document } from 'mongoose';

export interface IDocument {
    name: string;
    path: string;
    type: string;
    uploadedAt: Date;
}

export interface IMedia {
    name: string;
    path: string;
    uploadedAt: Date;
}

export interface IProject extends Document {
    name: string;
    customer: mongoose.Types.ObjectId;
    status: 'Not Started' | 'In Progress' | 'Completed' | 'On Hold';
    description: string;
    progress: number;
    documents: IDocument[];
    images: IMedia[];
    videos: IMedia[];
    createdAt: Date;
    updatedAt: Date;
}

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Customer'
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed', 'On Hold'],
        default: 'Not Started'
    },
    description: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        default: 0,
        min: 0,
        max: 100
    },
    documents: [{
        name: String,
        path: String,
        type: String,
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    }],
    images: [{
        name: String,
        path: String,
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    }],
    videos: [{
        name: String,
        path: String,
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

export default mongoose.model<IProject>('Project', projectSchema);