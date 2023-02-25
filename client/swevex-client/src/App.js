import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Careers from "./components/careers/Careers";
import Contact from "./components/contact/Contact";
import Apply from "./components/careers/Apply";
import ServiceTemplate from "./components/services/ServiceTemplate";
import ItInfrastructure from "./components/services/ItInfrastructure";
import DataProcessing from "./components/services/DataProcessing";
import WebDevelopment from "./components/services/WebDevelopment";
import Ecommerce from "./components/services/Ecommerce";
import CustomerSupport from "./components/services/CustomerSupport";
import Marketing from "./components/services/Marketing";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import Dashboard from "./components/Dashboard/Dashboard";
import ApplicationDetails from "./components/Dashboard/ApplicationDetails";
import ContactDetails from "./components/Dashboard/ContactDetails";
import Thankyou from "./components/contact/Thankyou";
import ProtectedResponse from "./components/protectedRoutes/ProtectedResponse";
import ResetPassword from "./components/Login/ResetPassword";
import OTP from "./components/Login/OTP";
import ChangePassword from "./components/Login/ChangePassword";
import LoginProtectedRoutes from "./components/protectedRoutes/LoginProtectedRoutes";

// Convert every a tag which are simple links to Link tag and import react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route
            path="services/itinfrastructure"
            element={<ItInfrastructure />}
          />
          <Route path="services/dataprocessing" element={<DataProcessing />} />
          <Route path="services/webdevelopment" element={<WebDevelopment />} />
          <Route path="services/e-commerce" element={<Ecommerce />} />
          <Route
            path="services/customersupport"
            element={<CustomerSupport />}
          />
          <Route path="services/marketing" element={<Marketing />} />
          {/* <Route path="services/:id" element={<ServiceTemplate />} /> */}
          <Route path="careers" element={<Careers />} />
          <Route path="careers/apply/:id" element={<Apply />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="thankyou"
            element={<ProtectedResponse Component={Thankyou} />}
          />
          <Route path="admin-login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="reset-password/otp" element={<OTP />} />
          <Route
            path="reset-password/otp/change-password"
            element={<LoginProtectedRoutes Component={ChangePassword} />}
          />

          <Route
            path="admin-dashboard"
            element={<ProtectedRoutes Component={Dashboard} />}
          />
          <Route
            path="application-Details"
            element={<ProtectedRoutes Component={ApplicationDetails} />}
          />
          <Route
            path="contact-Details"
            element={<ProtectedRoutes Component={ContactDetails} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
