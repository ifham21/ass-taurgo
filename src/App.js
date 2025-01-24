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
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import ClientDiary from "./Pages/PhotographerDashboard/Diary/ClientDiary";
import ClientCalendar from "./Pages/ClientDiary/ClientCalender";
import { DatePicker } from "@mui/x-date-pickers";
import CustomDatePicker from "./Pages/PhotographerDashboard/Diary/DatePickerUi";
import CalendarHeaderComponent from "./Pages/PhotographerDashboard/Diary/CalendarHeaderComponent";

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
        <Route path="/admin" element={<AdminDashboard />} />


        <Route path="/smile" element={<ClientDiary />} />

        <Route path="/td" element={<ClientCalendar />} />


        <Route path="/date" element={<CustomDatePicker />} />

        <Route path="/date2" element={<CalendarHeaderComponent />} />





      </Routes>
    </Router>
  );
}

export default App;
