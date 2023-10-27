'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Fetch the ID of the 'normal' role
    const role = await queryInterface.sequelize.query(
      `SELECT id FROM "Roles" WHERE name = 'normal' LIMIT 1`
    );
    const roleId = role[0][0].id;

    // 2. Update all users to have the 'normal' role
    return queryInterface.bulkUpdate('Users', { roleId: roleId }, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Reset the roleId for all users to null
    return queryInterface.bulkUpdate('Users', { roleId: null }, {});
  }
};