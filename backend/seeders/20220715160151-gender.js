'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log(Sequelize);
    await queryInterface.bulkInsert('genders',
      [{
        id: 1,
        gender_name: "homem cisgênero",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        gender_name: "mulher cisgênero",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        gender_name: "homem transgênero",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        gender_name: "mulher transgênero",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        gender_name: "homem não-binário",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        gender_name: "mulher não-binária",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    console.log(Sequelize);
  }
};
