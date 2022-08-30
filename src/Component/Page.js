import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collection from "./Collection";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./styles/page.css";
import Career from "./Career";
import About from "./About";
function Page() {
  return (
    <div className="page">
      <Router>
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Collection />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Page;
