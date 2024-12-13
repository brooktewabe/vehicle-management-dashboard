const vehicleService = require('../services/vehicleService');

exports.addVehicle = async (req, res) => {
  try {
    const newVehicle = await vehicleService.addVehicle(req.body);
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateVehicleStatus = async (req, res) => {
  try {
    const updatedVehicle = await vehicleService.updateVehicleStatus(req.params.id, req.body.status);
    res.json(updatedVehicle);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};