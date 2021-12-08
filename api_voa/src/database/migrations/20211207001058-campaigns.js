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
      category: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('campaigns');
  },
};
