import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
import Career from "./Career/Career";
import Landing from "./Landing/Landing";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Career />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
