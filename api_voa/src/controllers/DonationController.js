import Donation from '../models/Donation';
import User from '../models/User';

class DonationController {
  async index(req, res) {
    try {
      const donations = await Donation.findAll({
        order: [['id', 'DESC']],
        include: {
          model: User,
        },
      });
      return res.json(donations);
    } catch (err) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const donation = await Donation.findByPk(req.params.id, {
        order: [['id', 'DESC']],
        attributes: ['id', 'value', 'created_at'],
        include: {
          model: User,
          attributes: ['id', 'name', 'email', 'cpf', 'telephone'],
        },
      });
      return res.json(donation);
    } catch (err) {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
      const donation = await Donation.create(req.body);
      return res.json(donation);
    } catch (err) {
      return res.status(400).json({ message: err.name });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const donation = await Donation.findByPk(id);

      if (!donation) {
        return res.status(400).json({
          errors: ['Doação não existe'],
        });
      }
      const donationUpdate = await donation.update(req.body);
      return res.json(donationUpdate);
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

      const campaign = await Donation.findByPk(id);

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

export default new DonationController();
