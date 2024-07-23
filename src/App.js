// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";

import { PrimaryColorProvider } from "./PrimaryColorContext";

const App = () => {
    return (
        <PrimaryColorProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </PrimaryColorProvider>
    );
};

export default App;
