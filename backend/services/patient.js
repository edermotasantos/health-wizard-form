const { patient } = require('../models');
const {
  nameLength,
  cpfLength,
  userIdIsRequired,
  medicalRecordIsRequired,
  firstNameIsRequired,
  lastNameIsRequired,
  birthDateIsRequired,
  genderIdIsRequired,
  cpfIsRequired,
  rgIsRequired,
  ufIdIsRequired,
  emailIsRequired,
  atLeastOneIsRequired,
  medicalInsuranceIdIsRequired,
  medicalInsuranceCardIsRequired,
  cardExpirationDateIsRequired,
  patientAlreadyExists,
} = require('../schemas/messages');

const { BAD_REQUEST, CONFLICT } = require('../schemas/statusCodes');

const validateNameLength = (name) => {
  if (name.length < 8) {
    return { err: { statusCode: BAD_REQUEST, message: nameLength } };
  }
};

const validateCPFLength = (cpf) => {
  if (cpf.length < 11) {
    return { err: { statusCode: BAD_REQUEST, message: cpfLength } };
  }
};

const validateUserData = async (
    user_id,
    medical_record,
    first_name,
    last_name,
    birth_date,
    gender_id,
    cpf,
    rg,
    uf_id,
    email,
    mobile,
    phone,
    medical_insurance_id,
    medical_insurance_card,
    card_expiration_date,
) => {
  if (!user_id) return { err: { statusCode: BAD_REQUEST, message: userIdIsRequired } };
  if (!medical_record) return { err: { statusCode: BAD_REQUEST, message: medicalRecordIsRequired } };
  if (!first_name) return { err: { statusCode: BAD_REQUEST, message: firstNameIsRequired } };
  if (!last_name) return { err: { statusCode: BAD_REQUEST, message: lastNameIsRequired } };
  if (!birth_date) return { err: { statusCode: BAD_REQUEST, message: birthDateIsRequired } };
  if (!gender_id) return { err: { statusCode: BAD_REQUEST, message: genderIdIsRequired } };
  if (!cpf) return { err: { statusCode: BAD_REQUEST, message: cpfIsRequired } };
  if (!rg) return { err: { statusCode: BAD_REQUEST, message: rgIsRequired } };
  if (!uf_id) return { err: { statusCode: BAD_REQUEST, message: ufIdIsRequired } };
  if (!email) return { err: { statusCode: BAD_REQUEST, message: emailIsRequired } };
  if (!phone || !mobile) return { err: { statusCode: BAD_REQUEST, message: atLeastOneIsRequired } };
  if (!medical_insurance_id) return { err: { statusCode: BAD_REQUEST, message: medicalInsuranceIdIsRequired } };
  if (!medical_insurance_card) return { err: { statusCode: BAD_REQUEST, message: medicalInsuranceCardIsRequired } };
  if (!card_expiration_date) return { err: { statusCode: BAD_REQUEST, message: cardExpirationDateIsRequired } };
};

const createPatient = async ({ 
    user_id,
    medical_record,
    first_name,
    last_name,
    full_name,
    birth_date,
    gender_id,
    cpf,
    rg,
    uf_id,
    email,
    mobile,
    phone,
    medical_insurance_id,
    medical_insurance_card,
    card_expiration_date,
}) => {
    const userData = await validateUserData(
        user_id,
        medical_record,
        first_name,
        last_name,
        full_name,
        birth_date,
        gender_id,
        cpf,
        rg,
        uf_id,
        email,
        mobile,
        phone,
        medical_insurance_id,
        medical_insurance_card,
        card_expiration_date,
    );
    if (userData) return userData;
    const checkNameLength = await validateNameLength(full_name);
    if (checkNameLength) return checkNameLength;
    const checkCPFLength = await validateCPFLength(cpf); 
    if (checkCPFLength) return checkCPFLength;
    const cpfAlreadyExists = await patient.findOne({ where: { cpf } });
    if (cpfAlreadyExists) return { err: { statusCode: CONFLICT, message: patientAlreadyExists } };
    const createdUser = await patient.create({
        user_id,
        medical_record,
        first_name,
        last_name,
        full_name,
        birth_date,
        gender_id,
        cpf,
        rg,
        uf_id,
        email,
        mobile,
        phone,
        medical_insurance_id,
        medical_insurance_card,
        card_expiration_date,
    });
    return createdUser;
};

const listAllPatients = async () => {
    const usersFound = await patient.findAll({ raw: true });
    return usersFound;
  };

module.exports = {
    createPatient,
    listAllPatients,
};
