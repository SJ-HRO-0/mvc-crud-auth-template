import { Router } from 'express';
import passport, {
  getLogin, postLogin, getRegister, postRegister, logout
} from '../controllers/authController.js';

const router = Router();

router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/register', getRegister);
router.post('/register', postRegister);
router.post('/logout', logout);

export default router;
