import  { useEffect, useState } from 'react';
import axiosInstance from '../api';
import { toast } from "react-toastify";

const UpdateVehicleStatusForm = ({ onUpdate }) => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [newStatus, setNewStatus] = useState('');

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axiosInstance.get('/');
      setVehicles(response.data);
    };

    fetchVehicles();
  }, []);

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    if (selectedVehicle && newStatus) {
      await axiosInstance.patch(`/${selectedVehicle}`, { status: newStatus });
      setNewStatus('');
      toast.success("Updated Successfully");
      setTimeout(() => {
        if (onUpdate) onUpdate(); // Refresh parent component
      }, 300);
    }
  };

  return (
    <form onSubmit={handleUpdateStatus} className="mb-8 flex items-center gap-4">
      <select
        value={selectedVehicle}
        onChange={(e) => setSelectedVehicle(e.target.value)}
        className="border border-gray-300 rounded p-2"
      >
        <option value="">Select a vehicle</option>
        {vehicles.map((vehicle) => (
          <option key={vehicle._id} value={vehicle._id}>
            {vehicle.VehicleName}
          </option>
        ))}
      </select>
      <select
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        className={`border border-gray-300 rounded p-2`}
        required
      >
        <option value="" disabled>
          Status
        </option>
        <option value="Available" className="text-black">
          Available
        </option>
        <option value="In-use" className="text-black">
          In-use
        </option>
        <option value="Under maintenance"className="text-black">
          Under maintenance
        </option>
      </select>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Update Status
      </button>
    </form>
  );
};

export default UpdateVehicleStatusForm;
