import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Create a unique filename
  }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Middleware to handle file uploads
export const uploadFiles = (req: Request, res: Response, next: NextFunction) => {
  upload.array('files', 10)(req, res, (err) => { // Limit to 10 files
    if (err) {
      return res.status(400).send({ message: 'File upload failed', error: err });
    }
    next();
  });
};