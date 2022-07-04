import "./Styles/index.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import WhyUs from "./Components/About/WhyUs/WhyUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
