import React, { useState } from 'react';
import axiosInstance from '../api';

const AddVehicleForm = ({ onAdd }) => {
  const [vehicleName, setVehicleName] = useState('');

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    await axiosInstance.post('/', { VehicleName: vehicleName });
    setVehicleName('');
    if (onAdd) onAdd(); // Refresh parent component
  };

  return (
    <form onSubmit={handleAddVehicle} className="mb-8 flex items-center gap-4">
      <input
        type="text"
        placeholder="Enter vehicle name"
        value={vehicleName}
        onChange={(e) => setVehicleName(e.target.value)}
        className="border border-gray-300 rounded p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Vehicle
      </button>
    </form>
  );
};

export default AddVehicleForm;
