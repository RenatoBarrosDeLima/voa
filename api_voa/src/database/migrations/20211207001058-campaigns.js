module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('campaigns', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      goal: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      deadline: {
        type: Sequelize.DATE,
        allowNull: true,
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
    await queryInterface.dropTable('campaigns');
  },
};
