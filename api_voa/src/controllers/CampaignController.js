// import sequelize from 'sequelize';
import sequelize from 'sequelize';
import Campaign from '../models/Campaign';
import Donation from '../models/Donation';
import User from '../models/User';

class CampaignController {
  async index(req, res) {
    try {
      const campaigns = await Campaign.findAll({
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: [
          'id',
          'title',
          'description',
          'image',
          'goal',
          'deadline',
          'category',
          'created_at',
          'user_id',
          [sequelize.fn('sum', sequelize.col('value')), 'total_collected'],
        ],
        group: ['id'],
        include: {
          model: Donation,
          where: {
            status: 1,
          },
          attributes: [],
        },
      });
      return res.json(campaigns);
    } catch (err) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const campaign = await Campaign.create(req.body);
      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async showCampaign(req, res) {
    try {
      const { id } = req.params;
      const campaign = await Campaign.findByPk(id, {
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: [
          'id',
          'title',
          'description',
          'image',
          'goal',
          'deadline',
          'category',
          'created_at',
          'user_id',
          [sequelize.fn('sum', sequelize.col('value')), 'total_collected'],
        ],
        group: ['id'],
        include: {
          model: Donation,
          where: {
            status: 1,
          },
          attributes: [],
        },

      });
      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async campaignSearchUserAll(req, res) {
    try {
      const { user_id } = req.body;
      const campaign = await Campaign.findAll({
        where: { user_id },
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: ['id', 'title', 'description', 'image', 'goal', 'deadline', 'category', 'created_at'],
        include: {
          model: Donation,
          attributes: [],
        },
      });
      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async campaignDetails(req, res) {
    try {
      const { id } = req.params;
      const campaign = await Campaign.findByPk(id, {
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: ['id', 'title', 'description', 'image', 'goal', 'deadline', 'category', 'created_at', 'user_id'],
        include: {
          model: Donation,
          attributes: ['id', 'value', 'created_at'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email', 'cpf', 'telephone'],
          },
        },
      });
      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async campaignSearchUser(req, res) {
    try {
      const { campaign_id, user_id } = req.body;
      const campaign = await Campaign.findAll({
        where: { user_id, id: campaign_id },
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: ['id', 'title'],
        include: {
          model: Donation,
          attributes: ['id', 'value', 'created_at'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email', 'cpf', 'telephone'],
          },
        },
      });
      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async campaignSearchUserFilter(req, res) {
    try {
      const { Op } = sequelize;
      const {
        campaign_id,
        user_id,
        reversal,
        start_date,
        end_date,
      } = req.body;

      const campaign = await Campaign.findAll({
        where: { user_id, id: campaign_id },
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: ['id', 'title'],
        include: {
          model: Donation,
          where: {
            created_at: {
              [Op.between]: [start_date, end_date],
            },
            reversal,
          },
          attributes: ['id', 'value', 'created_at'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email', 'cpf', 'telephone'],
          },
        },
      });
      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }
}

export default new CampaignController();
