import paypal from 'paypal-rest-sdk';
import Donation from '../models/Donation';

class PaypalController {
  async pay(req, res) {
    const {
      price = '', name = '', campaign_id = '', user_id = '',
    } = req.body;
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: `http://localhost:${process.env.API_PORT}/paypal/sucess?price=${price}&campaign_id=${campaign_id}&user_id=${user_id}&`,
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
        console.log(error);
        throw error;
      } else {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            return res.status(200).json({ href: payment.links[i].href });
          }
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

    await Donation.create({
      value: price,
      campaign_id,
      user_id,
      reversal: 0,
      status: 0,
      payer_id: PayerID,
      payment_id: paymentId,
      payment_type: 1,
    });

    const execute_payment_json = {
      payer_id: PayerID,
    };

    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log(JSON.stringify(payment));
        return res.redirect('http://localhost:3000/sucesso');
      }
    });
  }

  async cancel(req, res) {
    return res.json({ status: 'Erro ao realizar o pagamento' });
  }
}

export default new PaypalController();
