import { Router } from 'express';
import CampaignController from '../controllers/CampaignController';

const router = new Router();

router.get('/', CampaignController.index);
router.get('/showCampaign/:id', CampaignController.showCampaign);
router.post('/', CampaignController.store);
router.get('/campaignSearch/:id', CampaignController.campaignSearch);
router.post('/campaignSearchUser', CampaignController.campaignSearchUser);
router.post('/campaignSearchUserFilter', CampaignController.campaignSearchUserFilter);

export default router;
