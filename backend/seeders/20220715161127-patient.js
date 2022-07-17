'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log(Sequelize);
    await queryInterface.bulkInsert('patients',
      [
        {
          id: 1,
          user_id: 1,
          gender_id: 1,
          medical_insurance_id: 1,
          uf_id: 25,
          medical_record: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          first_name: 'Lorem',
          last_name: 'Ipsum',
          full_name: 'Lorem Ipsum',
          birth_date: '1978-05-06',
          cpf: '25656050726',
          rg: '220130436',
          email: 'lorem@gmail.com',
          mobile: '11970004386',
          phone: '1122084787',
          medical_insurance_card: '6377396708905689',
          card_expiration_date: '2027-01-01',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
  },

  async down (queryInterface, Sequelize) {
    console.log(Sequelize);
    await queryInterface.bulkDelete('Patients', null, {});
  }
};
