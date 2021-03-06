import dotenv from 'dotenv';
import paypal from 'paypal-rest-sdk';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import campaignRoutes from './src/routes/campaignRoutes';
import donationRoutes from './src/routes/donationRoutes';
import paypalRoutes from './src/routes/paypalRoutes';

paypal.configure({
  mode: 'sandbox', // sandbox or live
  client_id: process.env.PAYPAL_SANDBOX_CLIENT_ID,
  client_secret: process.env.PAYPAL_SANDBOX_SECRET,
});

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    const whiteList = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3003',
    ];

    const corsOptions = {
      origin(origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    };

    this.app.use(cors(corsOptions));

    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/campaigns', campaignRoutes);
    this.app.use('/donations', donationRoutes);
    this.app.use('/paypal', paypalRoutes);
  }
}

export default new App().app;
