const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/', vehicleController.addVehicle);
router.patch('/:id', vehicleController.updateVehicleStatus);
router.get('/', vehicleController.getAllVehicles);

module.exports = router;