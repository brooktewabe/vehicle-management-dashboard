import VehicleTable from './Components/VehicleTable';
import AddVehicleForm from './Components/AddVehicleForm';
import UpdateVehicleStatusForm from './Components/UpdateVehicleStatusForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8 text-center">Vehicle Management Dashboard</h1>
      <AddVehicleForm onAdd={() => window.location.reload()} />
      <UpdateVehicleStatusForm onUpdate={() => window.location.reload()} />
      <VehicleTable />
      <ToastContainer />

    </div>
  );
};

export default App;
