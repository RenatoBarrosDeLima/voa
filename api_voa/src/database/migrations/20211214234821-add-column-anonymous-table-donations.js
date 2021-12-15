module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'donations',
      'anonymous',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  down: async () => {},
};
