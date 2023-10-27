'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'bio', {
      type: Sequelize.STRING,
      allowNull: true
    });

    await queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Roles',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'bio');
    await queryInterface.removeColumn('Users', 'roleId');
  }
};