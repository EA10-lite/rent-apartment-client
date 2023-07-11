import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

// containers
import AuthLayout from "./containers/auth/AuthLayout";
import MainLayout from "./containers/main/MainLayout";

// Auth Routes
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";
import RegisterAsAgents from "./routes/auth/register-as-agents";
import ForgotPassword from "./routes/auth/forgot-password";
import ResetPassword from "./routes/auth/reset-password";
import VerifyAccount from "./routes/auth/verify-account";

// Main Routes
import About from "./routes/about/about";
import Agents from "./routes/agents/agents";
import Agent from "./routes/agents/agent";
import Apartment from "./routes/apartments/apartment";
import Apartments from "./routes/apartments/apartments";
import Contact from "./routes/contact/contact";
import FAQs from "./routes/faqs/faqs";
import Home from "./routes/home/home";
import NotFound from "./routes/404/404";
import PrivacyPolicy from "./routes/privacy-policy/privacy-policy";
import Profile from "./routes/profile/profile";
import TermsAndConditions from "./routes/terms-conditions/terms-conditions";

function App() {
  return (
    <div className="App p-relative w-100 h-100">
     <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:id" element={<Apartment />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agents/:id" element={<Agent />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/faqs" element={<FAQs />} />

          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-agents" element={<RegisterAsAgents />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
        </Route>
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
