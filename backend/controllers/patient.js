const patientService = require('../services/patient');

const { tryAgainLater } = require('../util/messages');

const { OK, INTERNAL_SERVER_ERROR } = require('../util/statusCodes');

const createPatient = async (req, res) => {
  try {
    const {
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
    } = req.body;
    const patientData = await patientService.createPatient({
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
    if (patientData.err) {
      const { statusCode, message } = patientData.err;
      return res.status(statusCode).json({ message });
    }
    return res.status(OK).json(patientData);
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: tryAgainLater });
  }
};

const listAllPatients = async (req, res) => {
    try {
        const foundPatients = await patientService.listAllPatients();
        return res.status(OK).json(foundPatients);
    } catch (err) {
        res.status(INTERNAL_SERVER_ERROR).json({ message: tryAgainLater });
    }
  };

module.exports = {
  createPatient,
  listAllPatients
};
