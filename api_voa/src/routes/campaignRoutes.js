import { Router } from 'express';
import CampaignController from '../controllers/CampaignController';

const router = new Router();

router.get('/', CampaignController.index);
router.post('/', CampaignController.store);
router.get('/showCampaign/:id', CampaignController.showCampaign);
router.get('/campaignDetails/:id', CampaignController.campaignDetails);
router.post('/campaignSearchUser', CampaignController.campaignSearchUser);
router.post('/campaignSearchUserAll', CampaignController.campaignSearchUserAll);
router.post('/campaignSearchUserFilter', CampaignController.campaignSearchUserFilter);

export default router;
