import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import LandingPage from '../views/LandingPage'
import Privacy from '../views/Privacy'

export default function () {
  return (
    <Router>  
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}