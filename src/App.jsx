import { CommercialDashboard } from "./features/dashboard/components/CommercialDashboard";
import { ToastContainer } from "./shared/components/ui/ToastContainer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 font-sans text-gray-900">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <CommercialDashboard />
      </div>
    </div>
  );
}

export default App;
