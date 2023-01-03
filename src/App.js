import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/";
import Contact from "./pages/contact/";
import Appointment from "./pages/appointment/";
function App() {
  return (
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<div>Oops! Go Back  </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
