import Campaign from '../models/Campaign';
import Donation from '../models/Donation';
import User from '../models/User';

class CampaignController {
  async index(req, res) {
    try {
      const campaigns = await Campaign.findAll({
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: ['id', 'title', 'description', 'image', 'goal', 'deadline', 'created_at'],
        include: {
          model: Donation,
          attributes: ['id', 'value', 'created_at'],
          include: {
            model: User,
            attributes: ['id', 'name', 'email', 'cpf', 'telephone'],
          },
        },
      });
      return res.json(campaigns);
    } catch (err) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const campaign = await Campaign.findByPk(id, {
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: ['id', 'title', 'description', 'image', 'goal', 'deadline', 'created_at'],
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

  async store(req, res) {
    try {
      const campaign = await Campaign.create(req.body);
      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      const campaign = await Campaign.findByPk(req.userId);

      if (!campaign) {
        return res.status(400).json({
          errors: ['Campanha não existe'],
        });
      }

      const newData = await campaign.update(req.body);
      return res.json(newData);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const campaign = await Campaign.findByPk(id);

      if (!campaign) {
        return res.status(400).json({
          errors: ['Campanha não existe'],
        });
      }

      await campaign.destroy();

      return res.json(campaign);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new CampaignController();
