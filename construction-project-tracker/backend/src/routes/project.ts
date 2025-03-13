import express from 'express';
import {
    createProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject
} from '../controllers/projectController';
import authMiddleware from '../middleware/auth';

const router = express.Router();

// All routes are protected
router.use(authMiddleware);

router.route('/')
    .post(createProject)
    .get(getProjects);

router.route('/:id')
    .get(getProjectById)
    .put(updateProject)
    .delete(deleteProject);

export default router;