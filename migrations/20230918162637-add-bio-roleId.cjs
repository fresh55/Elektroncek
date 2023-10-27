'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add bio column to Users table
    await queryInterface.addColumn('Users', 'bio', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    // Add roleId column to Users table as a foreign key
    await queryInterface.addColumn('Users', 'roleId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Roles',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the columns in the reverse order they were added
    await queryInterface.removeColumn('Users', 'roleId');
    await queryInterface.removeColumn('Users', 'bio');
  },
};