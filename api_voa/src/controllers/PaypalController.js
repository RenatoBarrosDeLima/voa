import paypal from 'paypal-rest-sdk';
import Donation from '../models/Donation';

class PaypalController {
  async pay(req, res) {
    const {
      price = '', name = '', campaign_id = '', user_id = '', anonymous = '',
    } = req.body;
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: `http://localhost:${process.env.API_PORT}/paypal/sucess?price=${price}&campaign_id=${campaign_id}&user_id=${user_id}&anonymous=${anonymous}&`,
        cancel_url: `http://localhost:${process.env.API_PORT}/paypal/cancel`,
      },
      transactions: [{
        item_list: {
          items: [{
            name,
            sku: 'item',
            price,
            currency: 'BRL',
            quantity: 1,
          }],
        },
        amount: {
          currency: 'BRL',
          total: price,
        },
        description: name,
      }],
    };

    // eslint-disable-next-line consistent-return
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        return res.status(200).json({ error });
      }
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < payment.links.length; i++) {
        if (payment.links[i].rel === 'approval_url') {
          return res.status(200).json({ href: payment.links[i].href });
        }
      }
    });
  }

  async sucess(req, res) {
    const { PayerID } = req.query;
    const { paymentId } = req.query;
    const { price } = req.query;
    const { campaign_id } = req.query;
    const { user_id } = req.query;
    const { anonymous } = req.query;

    const execute_payment_json = {
      payer_id: PayerID,
    };

    paypal.payment.execute(paymentId, execute_payment_json, async (error, payment) => {
      if (error) {
        return res.status(400).json({ error });
      }
      const payment_result = JSON.stringify(payment);
      try {
        await Donation.create({
          value: price,
          campaign_id,
          user_id,
          reversal: 0,
          status: 0,
          payer_id: PayerID,
          payment_id: paymentId,
          payment_type: 1,
          payment: payment_result,
          anonymous,
        });
      } catch (err) {
        return res.status(400).json({ err });
      }
      return res.redirect('http://localhost:3000/sucesso');
    });
  }

  async cancel(req, res) {
    return res.redirect('http://localhost:3000/error');
  }

  async reversal(req, res) {
    const { id = '', value = '', cart = '' } = req.body;

    const data = {
      amount: {
        currency: 'BRL',
        total: value,
      },
    };
    const saleId = cart;

    paypal.sale.refund(saleId, data, async (error) => {
      if (error) {
        return res.status(400).json({ error });
      }
      const donation = await Donation.findByPk(id);
      const donationUpdate = await donation.update(req.body);

      return res.status(200).json(donationUpdate);
    });
  }
}

export default new PaypalController();
