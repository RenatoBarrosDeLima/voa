import { Router } from 'express';
import CampaignController from '../controllers/CampaignController';

const router = new Router();

router.get('/', CampaignController.index);
router.get('/:id', CampaignController.show);
router.post('/', CampaignController.store);

export default router;
