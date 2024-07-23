// src/App.js
import React from "react";
import { Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

import { PrimaryColorProvider } from "./PrimaryColorContext";

const App = () => {
    return (
        <PrimaryColorProvider>
            {/* <Router> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            {/* </Router> */}
        </PrimaryColorProvider>
    );
};

export default App;
