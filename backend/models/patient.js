'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      patient.belongsTo(models.user,
        { foreignKey: 'user_id', as: 'user', onUpdate: 'CASCADE', onDelete: 'CASCADE'},
      );
      patient.belongsTo(models.uf,
        { foreignKey: 'uf_id', as: 'uf', onUpdate: 'CASCADE', onDelete: 'CASCADE'},
      );
      patient.belongsTo(models.gender,
        { foreignKey: 'gender_id', as: 'gender', onUpdate: 'CASCADE', onDelete: 'CASCADE'},
      );
      patient.belongsTo(models.medical_insurance,
        { foreignKey: 'medical_insurance_id', as: 'medical_insurance', onUpdate: 'CASCADE', onDelete: 'CASCADE'},
      );
    }
  }
  patient.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    medical_insurance_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uf_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    medical_record: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rg: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medical_insurance_card: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_expiration_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};