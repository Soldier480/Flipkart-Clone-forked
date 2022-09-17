import express from 'express';
import { userSignup, userlogin } from '../controller/user-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userlogin);

export default router;