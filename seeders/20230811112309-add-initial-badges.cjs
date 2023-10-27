'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Badges', [
      {
        name: "Novo",
        iconReference: "Sparkles",
        color: "#FF5733",
        description: "Produkt je nov.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Omejena izdaja",
        iconReference: "AlertTriangle",
        color: "#FFD700",
        description: "Posebna in omejena serija izdelka.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Eko prijazno",
        iconReference: "Leaf",
        color: "#27ae60",
        description: "Izdelek je okolju prijazen.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Izjemna vrednost",
        iconReference: "ThumbsUp",
        color: "#FFD700",
        description: "Odlična kakovost po ugodni ceni.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Visoka kakovost",
        iconReference: "Medal",
        color: "#8e44ad",
        description: "Izdelek visoke kakovosti.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Redka najdba",
        iconReference: "Search",
        color: "#e67e22",
        description: "Izdelek, ki je težko najti drugje.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Badges', null, {});
  }
};