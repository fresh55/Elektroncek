'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1. Insert the 'user' and 'pro' roles
    await queryInterface.bulkInsert('Roles', [
      { name: 'user', createdAt: new Date(), updatedAt: new Date() },
      { name: 'pro', createdAt: new Date(), updatedAt: new Date() }
    ]);

    // Assuming you have a foreign key `roleId` in your 'Users' table that links to the 'Roles' table
    // 2. Fetch the ID of the 'user' role
    const userRole = await queryInterface.sequelize.query(
      `SELECT id FROM Roles WHERE name = 'user'`
    );
    const userRoleId = userRole[0][0].id;

    // 3. Update all users to have the 'user' role
    await queryInterface.bulkUpdate('Users', { roleId: userRoleId }, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Reset the roleId for all users
    await queryInterface.bulkUpdate('Users', { roleId: null }, {});

    // Delete the 'user' and 'pro' roles
    await queryInterface.bulkDelete('Roles', {
      name: { [Sequelize.Op.in]: ['user', 'pro'] }
    });
  },
};