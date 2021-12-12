import paypal from 'paypal-rest-sdk';

class PaypalController {
  async pay(req, res) {
    const { price = '', name } = req.body;
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: `http://localhost:${process.env.API_PORT}/paypal/sucess`,
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

    console.log(req.query);

    const execute_payment_json = {
      payer_id: PayerID,
      // transactions: [{
      //   amount: {
      //     currency: 'BRL',
      //     total: '25.00',
      //   },
      // }],
    };

    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        console.log(JSON.stringify(payment));
        return res.send('Pagamento efetuado com sucesso');
      }
    });
  }

  async cancel(req, res) {
    return res.json({ status: 'Erro ao realizar o pagamento' });
  }
}

export default new PaypalController();
