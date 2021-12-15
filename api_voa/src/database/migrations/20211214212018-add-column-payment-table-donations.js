module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'donations',
      'payment',
      {
        type: Sequelize.STRING(5000),
        allowNull: true,
      },
    );
  },

  down: async () => {},
};
