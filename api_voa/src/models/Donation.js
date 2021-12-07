import Sequelize, { Model } from 'sequelize';

export default class Donation extends Model {
  static init(sequelize) {
    super.init({
      value: {
        type: Sequelize.FLOAT,
        defaultValue: '',
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
