'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medical_insurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      medical_insurance.hasMany(models.patient,
        { foreignKey: 'medical_insurance_id', as: 'patients'},
      );
    }
  }
  medical_insurance.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'medical_insurance',
  });
  return medical_insurance;
};