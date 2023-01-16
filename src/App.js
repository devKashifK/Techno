import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Contact from "./Pages/contact";
import About from "./Pages/About";
import ProjectsPage from "./Pages/Projects";
import Services from "./Pages/Services";
import Footer from "./components/Footer/footer";
import SharedLayout from "./Pages/SharedLayout";
import "./HomepageCss/mobile.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element = {<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="services" element={<Services />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
