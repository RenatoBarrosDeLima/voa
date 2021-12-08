module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'donations',
      'status',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    );
  },

  down: async () => {},
};
