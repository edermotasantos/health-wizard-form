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

const validateFields = {
  checkUserId() {
    return { err: { statusCode: BAD_REQUEST, message: userIdIsRequired } };
  },
  checkMedicalRecord() {
    return { err: { statusCode: BAD_REQUEST, message: medicalRecordIsRequired } };
  },
  checkFirstName() {
    return { err: { statusCode: BAD_REQUEST, message: firstNameIsRequired } };
  },
  checkLastName() {
    return { err: { statusCode: BAD_REQUEST, message: lastNameIsRequired } };
  },
  checkBirthDate() {
    return { err: { statusCode: BAD_REQUEST, message: birthDateIsRequired } };
  },
  checkGenderId() {
    return { err: { statusCode: BAD_REQUEST, message: genderIdIsRequired } };
  },
  checkCPF() {
    return { err: { statusCode: BAD_REQUEST, message: cpfIsRequired } };
  },
  checkRG() {
    return { err: { statusCode: BAD_REQUEST, message: rgIsRequired } };
  },
  checkUFId() {
    return { err: { statusCode: BAD_REQUEST, message: ufIdIsRequired } };
  },
  checkEmail() {
    return { err: { statusCode: BAD_REQUEST, message: emailIsRequired } };
  },
  checkPhone() {
    return { err: { statusCode: BAD_REQUEST, message: atLeastOneIsRequired } };
  },
  checkMedicalInsuranceId() {
    return { err: { statusCode: BAD_REQUEST, message: medicalInsuranceIdIsRequired } };
  },
  checkMedicalInsuranceCard() {
    return { err: { statusCode: BAD_REQUEST, message: medicalInsuranceCardIsRequired } };
  },
  checkCardExpirationDate() {
    return { err: { statusCode: BAD_REQUEST, message: cardExpirationDateIsRequired } };
  },
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
  const validateUserId = validateFields.checkUserId();
  const validateMedicalRecord = validateFields.checkMedicalRecord();
  const validateFirstName = validateFields.checkFirstName();
  const validateLastName = validateFields.checkLastName();
  const validateBirthDate = validateFields.checkBirthDate();
  const validateGenderId = validateFields.checkGenderId();
  const validateCPF = validateFields.checkCPF();
  const validateRG = validateFields.checkRG();
  const validateUFId = validateFields.checkUFId();
  const validateEmail = validateFields.checkEmail();
  const validatePhone = validateFields.checkPhone();
  const validateMedicalInsuranceId = validateFields.checkMedicalInsuranceId();
  const validateMedicalInsuranceCard = validateFields.checkMedicalInsuranceCard();
  const validatecardExpirationDate = validateFields.checkCardExpirationDate();

  if (!user_id) return validateUserId;
  if (!medical_record) return validateMedicalRecord;
  if (!first_name) return validateFirstName;
  if (!last_name) return validateLastName;
  if (!birth_date) return validateBirthDate;
  if (!gender_id) return validateGenderId;
  if (!cpf) return validateCPF;
  if (!rg) return validateRG;
  if (!uf_id) return validateUFId;
  if (!email) return validateEmail;
  if (!phone || !mobile) return validatePhone;
  if (!medical_insurance_id) return validateMedicalInsuranceId;
  if (!medical_insurance_card) return validateMedicalInsuranceCard;
  if (!card_expiration_date) return validatecardExpirationDate;
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
