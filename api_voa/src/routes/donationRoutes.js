import { Router } from 'express';
import DonationController from '../controllers/DonationController';

const router = new Router();

// router.get('/', CampaignController.index);
// router.get('/:id', CampaignController.show);
router.post('/', DonationController.store);
// router.put('/', CampaignController.update);
// router.delete('/', CampaignController.delete);

export default router;
