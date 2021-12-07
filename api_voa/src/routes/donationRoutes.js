import { Router } from 'express';
import DonationController from '../controllers/DonationController';

const router = new Router();

router.get('/', DonationController.index);
router.get('/:id', DonationController.show);
router.post('/', DonationController.store);

export default router;
