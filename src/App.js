import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
// import RegistrationForm from "./Pages/RegisterForm";
import ClientRegister from "./Pages/ClientRegister/ClientRegister";
import RegistrationSuccess from "./Pages/ClientRegister/RegistrationSuccess";
import MultiStepForm from "./Pages/ClientRegister/MultiStepForm";
import ProgressBar from "./Pages/ProgressBar";
import MainApp from "./Pages/Dashboard/MainApp";
import TaurgoRegistration from "./Pages/ClientRegister/ExpertiseSelection/TaurgoRegistration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/client" element={<ClientRegister />} />
        <Route path="/success" element={<RegistrationSuccess />} />
        <Route path="/multi" element={<MultiStepForm />} />
        <Route path="/prog" element={<ProgressBar />} />
        <Route path="/dash" element={<MainApp />} />
        <Route path="/tau" element={<TaurgoRegistration />} />


      </Routes>
    </Router>
  );
}

export default App;
