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

// Convert every a tag which are simple links to Link tag and import react-router-dom

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/servicetemplate" element={<ServiceTemplate />}/>
          <Route path="careers" element={<Careers />} />
          <Route path="careers/apply/:id" element={<Apply />} />
          <Route path="contact" element={<Contact />} />
          <Route path ="admin-login" element = {<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
