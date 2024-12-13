const Vehicle = require('../models/vehicleModel');

class VehicleService {
  async addVehicle(vehicleData) {
    try {
      const vehicle = new Vehicle(vehicleData);
      return await vehicle.save();
    } catch (error) {
      throw error;
    }
  }

  async updateVehicleStatus(id, status) {
    try {
      const vehicle = await Vehicle.findByIdAndUpdate(
        id,
        { status },
        { new: true, runValidators: true }
      );
      if (!vehicle) {
        throw new Error('Vehicle not found');
      }
      return vehicle;
    } catch (error) {
      throw error;
    }
  }

  async getAllVehicles() {
    try {
      return await Vehicle.find();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new VehicleService();