'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create Badge table
    await queryInterface.createTable('Badges', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      iconReference: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    // Create ProduktBadge table (for many-to-many relationship)
    await queryInterface.createTable('ProduktBadges', {
      produktId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Produkts',
          key: 'id'
        },
        primaryKey: true,
      },
      badgeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Badges',
          key: 'id'
        },
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProduktBadges');
    await queryInterface.dropTable('Badges');
  }
};