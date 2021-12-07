import Donation from '../models/Donation';

class DonationController {
  async store(req, res) {
    try {
      const donation = await Donation.create(req.body);
      return res.json(donation);
    } catch (err) {
      return res.status(400).json({ errors: err.errors.map((e) => e.message) });
    }
  }

  async update(req, res) {
    try {
      const campaign = await Donation.findByPk(req.userId);

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
