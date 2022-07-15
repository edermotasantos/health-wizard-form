'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log(Sequelize);
    await queryInterface.bulkInsert('medical_insurances',
      [{
        id: 1,
        name: 'Amil Assistência Médica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Bradesco Seguros',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Central Nacional Unimed (CNU)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'GreenLine Sistema de Saúde',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'NotreDame Intermédica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'SulAmérica',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medical_insurances', null, {});
    console.log(Sequelize);
  }
};
