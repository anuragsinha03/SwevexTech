import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Careers from "./components/careers/Careers";
import Contact from "./components/contact/Contact";
import Apply from "./components/careers/Apply";
import ServiceTemplate from "./components/services/ServiceTemplate";
import Login from "./components/Login/Login";
import ProtectedRoutes from "./components/protectedRoutes/ProtectedRoutes";
import Dashboard from "./components/Dashboard/Dashboard";
import ApplicationDetails from "./components/Dashboard/ApplicationDetails";
import ContactDetails from "./components/Dashboard/ContactDetails";
import Thankyou from "./components/contact/Thankyou";

// Convert every a tag which are simple links to Link tag and import react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceTemplate />} />
          <Route path="careers" element={<Careers />} />
          <Route path="careers/apply/:id" element={<Apply />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thankyou" element={<Thankyou />} />
          <Route path="admin-login" element={<Login />} />
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
