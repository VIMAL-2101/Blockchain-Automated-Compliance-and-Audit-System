// import React from "react";
// import { BrowserRouter as Router, Routes, Route,useLocation  } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import About from "./pages/About";
// import HowItWorks from "./pages/HowItWorks";
// import Services from "./pages/Services";


// export default function App() {
// return (
// <Router>
// <Routes>
// <Route path="/" element={<Landing />} />
// <Route path="/login" element={<Login />} />
// <Route path="/signup" element={<Signup />} />
// <Route path="/about" element={<About />} />
// <Route path="/how-it-works" element={<HowItWorks />} />
// <Route path="/services" element={<Services />} />
// </Routes>
// </Router>
// );
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
