import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import campaignRoutes from './src/routes/campaignRoutes';

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
  }
}

export default new App().app;
