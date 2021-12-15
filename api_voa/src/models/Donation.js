import Sequelize, { Model } from 'sequelize';

export default class Donation extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.FLOAT,
        defaultValue: '',
      },
      reversal: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      payer_id: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      payment_id: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      payment_type: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      payment: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      anonymous: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
    }, {
      sequelize,
      tableName: 'donations',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Campaign, { foreignKey: 'campaign_id' });
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}
