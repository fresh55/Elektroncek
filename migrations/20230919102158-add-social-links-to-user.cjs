'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Users', 'facebookLink', {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    });

    await queryInterface.addColumn('Users', 'instagramLink', {
      type: Sequelize.STRING,
      allowNull: true,
      validate: {
        isUrl: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'facebookLink');
    await queryInterface.removeColumn('Users', 'instagramLink');
  }
};