module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'donations',
      'payment_type',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  down: async () => {},
};
