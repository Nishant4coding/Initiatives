import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Landing from "./components/StartupValidation/Landing";
import ValidationForm from "./components/StartupValidation/ValidationForm";
import Investment from "./components/Investment/Investment";

function App() {
  return (
    <>
      <Routes >
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<UserProfile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/startupvalidation" element={<Landing />} />
        <Route path="/validationform" element={<ValidationForm />} />
        <Route path="/investment" element={<Investment />} />
      </Routes>
    </>
  );
}

export default App;
