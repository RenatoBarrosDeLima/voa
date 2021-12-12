module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'donations',
      'payment_id',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    );
  },

  down: async () => {},
};
