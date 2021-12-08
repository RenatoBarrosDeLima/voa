module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'donations',
      'reversal',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  down: async () => {},
};
