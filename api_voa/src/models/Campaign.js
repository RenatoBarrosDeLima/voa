import Sequelize, { Model } from 'sequelize';

export default class Campaign extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      goal: {
        type: Sequelize.FLOAT,
        defaultValue: '',
      },
      deadline: {
        type: Sequelize.DATE,
        defaultValue: '',
      },
      category: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Donation, { foreignKey: 'campaign_id' });
  }
}
