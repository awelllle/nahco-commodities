import { Routes, Route } from "react-router-dom";
import Home from "./pages/home-section/Home";
import Service from "./pages/service-section/Service";
import About from "./pages/about-section/About";
import GlobalReach from "./pages/global-section/GlobalReach";
import Contact from "./pages/contact-section/Contact";
import Quote from "./pages/quote-section/Quote";
import Inquiry from "./pages/inquiry-section/Inquiry";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/global" element={<GlobalReach />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/inquiry" element={<Inquiry />} />
    </Routes>
  );
};

export default App;
