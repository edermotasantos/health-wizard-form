'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    console.log(Sequelize);
    await queryInterface.bulkInsert('ufs',
      [{
        id: 1,
        uf_code: 12,
        federation_unit: 'Acre (AC)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        uf_code: 27,
        federation_unit: 'Alagoas (AL)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        uf_code: 16,
        federation_unit: 'Amapá (AP)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        uf_code: 13,
        federation_unit: 'Amazonas (AM)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        uf_code: 29,
        federation_unit: 'Bahia (BA)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        uf_code: 23,
        federation_unit: 'Ceará (CE)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        uf_code: 53,
        federation_unit: 'Distrito Federal (DF)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        uf_code: 32,
        federation_unit: 'Espírito Santo (ES)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        uf_code: 52,
        federation_unit: 'Goiás (GO)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        uf_code: 21,
        federation_unit: 'Maranhão (MA)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        uf_code: 51,
        federation_unit: 'Mato Grosso (MT)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        uf_code: 50,
        federation_unit: 'Mato Grosso do Sul (MS)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        uf_code: 31,
        federation_unit: 'Minas Gerais (MG)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        uf_code: 15,
        federation_unit: 'Pará (PA)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        uf_code: 25,
        federation_unit: 'Paraíba (PB)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        uf_code: 41,
        federation_unit: 'Paraná (PR)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        uf_code: 26,
        federation_unit: 'Pernambuco (PE)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        uf_code: 22,
        federation_unit: 'Piauí (PI)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        uf_code: 33,
        federation_unit: 'Rio de Janeiro (RJ)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        uf_code: 24,
        federation_unit: 'Rio Grande do Norte (RN)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        uf_code: 43,
        federation_unit: 'Rio Grande do Sul (RS)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        uf_code: 11,
        federation_unit: 'Rondônia (RO)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        uf_code: 14,
        federation_unit: 'Roraima (RR)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        uf_code: 42,
        federation_unit: 'Santa Catarina (SC)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        uf_code: 35,
        federation_unit: 'São Paulo (SP)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        uf_code: 28,
        federation_unit: 'Sergipe (SE)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        uf_code: 17,
        federation_unit: 'Tocantins (TO)',
        abbreviation: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], { timestamps: false });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ufs', null, {});
    console.log(Sequelize);
  }
};
