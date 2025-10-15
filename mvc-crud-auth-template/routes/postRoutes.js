import { Router } from 'express';
import { ensureAuth } from '../middleware/auth.js';
import {
  listPosts, showNew, createPost, showPost, showEdit, updatePost, deletePost
} from '../controllers/postController.js';

const router = Router();

router.use(ensureAuth); // protege todo /posts/*
router.get('/', listPosts);
router.get('/new', showNew);
router.post('/', createPost);
router.get('/:id', showPost);
router.get('/:id/edit', showEdit);
router.post('/:id', updatePost);
router.post('/:id/delete', deletePost);

export default router;
