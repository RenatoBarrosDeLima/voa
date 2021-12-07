module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'campaigns',
      'category',
      {
        type: Sequelize.STRING,
        allowNull: true,
      },
    );
  },

  down: async () => {},
};
