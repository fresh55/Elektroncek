'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Produkts', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Here, you should reverse the changes made in the up function
    // This example just reverts the onDelete option
    await queryInterface.changeColumn('Produkts', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      },
      onDelete: 'SET NULL' // or whatever your previous setting was
    });
  }
};
