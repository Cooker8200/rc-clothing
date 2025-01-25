import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scripts/Home";
import About from "./scripts/About";
import Contact from "./scripts/Contact";

const RoutesComponent: FC = () => (
  <BrowserRouter basename="rc-clothing">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComponent;
