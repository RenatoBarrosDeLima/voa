module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('donations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      campaign_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'campaigns',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },

    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('donations');
  },
};
