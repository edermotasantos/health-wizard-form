const { patient } = require('../models');
const { patientAlreadyExists } = require('../util/messages');
const {
  validateNameLength,
  validateCPFLength,
  validateFields,
} = require('../util/validations');

const { CONFLICT } = require('../util/statusCodes');

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
