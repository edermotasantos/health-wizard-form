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
        abbreviation: 'AL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        uf_code: 16,
        federation_unit: 'Amapá (AP)',
        abbreviation: 'AP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        uf_code: 13,
        federation_unit: 'Amazonas (AM)',
        abbreviation: 'AM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        uf_code: 29,
        federation_unit: 'Bahia (BA)',
        abbreviation: 'BA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        uf_code: 23,
        federation_unit: 'Ceará (CE)',
        abbreviation: 'CE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        uf_code: 53,
        federation_unit: 'Distrito Federal (DF)',
        abbreviation: 'DF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        uf_code: 32,
        federation_unit: 'Espírito Santo (ES)',
        abbreviation: 'ES',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        uf_code: 52,
        federation_unit: 'Goiás (GO)',
        abbreviation: 'GO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        uf_code: 21,
        federation_unit: 'Maranhão (MA)',
        abbreviation: 'MA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        uf_code: 51,
        federation_unit: 'Mato Grosso (MT)',
        abbreviation: 'MT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        uf_code: 50,
        federation_unit: 'Mato Grosso do Sul (MS)',
        abbreviation: 'MS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        uf_code: 31,
        federation_unit: 'Minas Gerais (MG)',
        abbreviation: 'MG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        uf_code: 15,
        federation_unit: 'Pará (PA)',
        abbreviation: 'PA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        uf_code: 25,
        federation_unit: 'Paraíba (PB)',
        abbreviation: 'PB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        uf_code: 41,
        federation_unit: 'Paraná (PR)',
        abbreviation: 'PR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        uf_code: 26,
        federation_unit: 'Pernambuco (PE)',
        abbreviation: 'PE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        uf_code: 22,
        federation_unit: 'Piauí (PI)',
        abbreviation: 'PI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        uf_code: 33,
        federation_unit: 'Rio de Janeiro (RJ)',
        abbreviation: 'RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        uf_code: 24,
        federation_unit: 'Rio Grande do Norte (RN)',
        abbreviation: 'RN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        uf_code: 43,
        federation_unit: 'Rio Grande do Sul (RS)',
        abbreviation: 'RS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        uf_code: 11,
        federation_unit: 'Rondônia (RO)',
        abbreviation: 'RO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        uf_code: 14,
        federation_unit: 'Roraima (RR)',
        abbreviation: 'RR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        uf_code: 42,
        federation_unit: 'Santa Catarina (SC)',
        abbreviation: 'SC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        uf_code: 35,
        federation_unit: 'São Paulo (SP)',
        abbreviation: 'SP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        uf_code: 28,
        federation_unit: 'Sergipe (SE)',
        abbreviation: 'SE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        uf_code: 17,
        federation_unit: 'Tocantins (TO)',
        abbreviation: 'TO',
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
