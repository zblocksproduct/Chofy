import React from "react";
import Chofy from "./pages/chofy";
import UEFA from "./pages/uefa";
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
          <Route path="experience" element={<ChofyLanding />} />
          <Route path="uefa" element={<UEFA />}/>
        </Routes>
      </Router>
    </div>
  );
}
