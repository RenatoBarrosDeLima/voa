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
          [sequelize.fn('sum', sequelize.col('value')), 'total_collected'],
        ],
        include: {
          model: Donation,
          attributes: [],
        },
      });
      return res.json(campaigns);
    } catch (err) {
      return res.json(null);
    }
  }

  // [sequelize.fn('sum', sequelize.col('value')), 'value_total']
  // async index(req, res) {
  //   try {
  //     const campaigns = await Campaign.findAll({
  //       order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
  //       attributes: ['id', 'title', 'description', 'image', 'goal', 'deadline', 'created_at'],
  //       include: {
  //         model: Donation,
  //         attributes: ['id', 'value', 'created_at'],
  //         include: {
  //           model: User,
  //           attributes: ['id', 'name', 'email', 'cpf', 'telephone'],
  //         },
  //       },
  //     });
  //     return res.json(campaigns);
  //   } catch (err) {
  //     return res.json(null);
  //   }
  // }

  async show(req, res) {
    try {
      const { id } = req.params;
      const campaign = await Campaign.findByPk(id, {
        order: [['id', 'DESC'], [Donation, 'id', 'DESC']],
        attributes: ['id', 'title', 'description', 'image', 'goal', 'deadline', 'category', 'created_at'],
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
}

export default new CampaignController();
