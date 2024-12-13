const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  VehicleName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Available', 'In-use', 'Under maintenance'],
    default: 'Available',
  },
},
{
  timestamps: true, // created at and updated at
});

module.exports = mongoose.model('Vehicle', vehicleSchema);