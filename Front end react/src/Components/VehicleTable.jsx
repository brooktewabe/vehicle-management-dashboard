import React, { useEffect, useState } from 'react';
import axiosInstance from '../api';

const VehicleTable = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axiosInstance.get('/');
      setVehicles(response.data);
    };

    fetchVehicles();
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Vehicle List</h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Vehicle Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle._id} className="text-center">
              <td className="border px-4 py-2">{vehicle.VehicleName}</td>
              <td className="border px-4 py-2">{vehicle.status}</td>
              <td className="border px-4 py-2">
                {new Date(vehicle.updatedAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleTable;
