'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Produkt', 'slike', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: true
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Produkt', 'slike');
  }
};