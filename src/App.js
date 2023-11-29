import React from "react";
import Chofy from "./pages/chofy";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ChofyLanding from "./pages/chofyLanding";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Chofy />} />
          <Route path="chofyLanding" element={<ChofyLanding />} />
        </Routes>
      </Router>
    </div>
  );
}
