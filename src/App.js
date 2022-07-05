import "./Styles/index.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import WhyUs from "./Components/About/WhyUs/WhyUs";
import About from "./Components/About/AboutSection/About";
import Polyclinic from "./Components/About/Polyclinic/Polyclinic";
import Kvkk from "./Components/About/Kvkk/Kvkk";
import HumanResources from "./Components/About/HumanResources/HumanResources";
import Services from "./Components/Services/Services";
import ServiceDetail from "./Components/Services/ServiceDetail/ServiceDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/polyclinic" element={<Polyclinic />} />
        <Route path="/human-resources" element={<HumanResources />} />
        <Route path="/kvkk" element={<Kvkk />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-detail/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
