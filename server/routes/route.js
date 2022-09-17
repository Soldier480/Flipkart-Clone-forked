import express from 'express';
import { getProducts } from '../controller/product-controller.js';
import { userSignup, userlogin } from '../controller/user-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userlogin);

router.get('/products', getProducts);
export default router;