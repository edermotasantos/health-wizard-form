const router = require('express').Router();
const Patient = require('../controllers/patient');

router.post('/', Patient.createPatient);
router.get('/', Patient.listAllPatients);

module.exports = router;