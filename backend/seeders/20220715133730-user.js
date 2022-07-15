'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log(Sequelize);
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'teste.be3',
        password: 'ProcSeletivo#2020',
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
