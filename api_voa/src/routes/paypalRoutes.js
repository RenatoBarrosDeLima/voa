import { Router } from 'express';
import PaypalController from '../controllers/PaypalController';

const router = new Router();

router.post('/pay', PaypalController.pay);
router.get('/sucess', PaypalController.sucess);
router.get('/cancel', PaypalController.cancel);
router.post('/reversal', PaypalController.reversal);

export default router;
