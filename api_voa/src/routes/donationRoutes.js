import { Router } from 'express';
import DonationController from '../controllers/DonationController';

const router = new Router();

router.get('/', DonationController.index);
router.post('/', DonationController.store);
router.put('/', DonationController.update);
router.get('/showDonation/:id', DonationController.showDonation);
router.post('/donationSearchUser', DonationController.donationSearchUser);

export default router;
