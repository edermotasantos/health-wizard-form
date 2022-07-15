'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      gender_id: {
        type: Sequelize.INTEGER
      },
      medical_insurance_id: {
        type: Sequelize.INTEGER
      },
      uf_id: {
        type: Sequelize.INTEGER
      },
      medical_record: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      full_name: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATEONLY
      },
      cpf: {
        type: Sequelize.INTEGER
      },
      rg: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.INTEGER
      },
      medical_insurance_card: {
        type: Sequelize.INTEGER
      },
      card_expiration_date: {
        type: Sequelize.DATEONLY
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patients');
  }
};