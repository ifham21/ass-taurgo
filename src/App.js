import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ClientRegister from "./Pages/RegisterPage/ClientRegister/ClientRegister";
import RegistrationSuccess from "./Pages/RegisterPage/ClientRegister/RegistrationSuccess/RegistrationSuccess";
import MultiStepForm from "./Pages/RegisterPage/ClientRegister/MultiStepForm";
import ProgressBar from "./Pages/RegisterPage/ClientRegister/ProgressBar-Component/ProgressBar";
import Dashboard from "./Pages/PhotographerDashboard/Dashboard";
import SpringTest from "./Pages/SpringTest/SpringTest";
import PartnerMultiStepForm from "./Pages/RegisterPage/PartnerRegister/PartnerMultiStepForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/client" element={<ClientRegister />} />
        <Route path="/client-success" element={<RegistrationSuccess />} />
        <Route path="/client-multi" element={<MultiStepForm />} />
        <Route path="/partner-multi" element={<PartnerMultiStepForm />} />
        <Route path="/prog" element={<ProgressBar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/springTest" element={<SpringTest />} />


      </Routes>
    </Router>
  );
}

export default App;
