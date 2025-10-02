import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import CopyRights from "./pages/CopyRights";
import Booking from "./pages/Booking";
import NotFound from "./pages/NotFound";
import PageWrapTrans from "./PageWrapTrans";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapTrans><Home /></PageWrapTrans>} />
        <Route path="/booking" element={<PageWrapTrans><Booking /></PageWrapTrans>} />
        <Route path="/copyright" element={<PageWrapTrans><CopyRights /></PageWrapTrans>} />,
        <Route path="*" element={<PageWrapTrans><NotFound /></PageWrapTrans>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    document.addEventListener("keydown", (e) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.shiftKey && e.key === "C") || 
        (e.ctrlKey && e.key === "u") || 
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    });

    document.addEventListener("copy", (e) => e.preventDefault());

    document.addEventListener("cut", (e) => e.preventDefault());

    document.addEventListener("paste", (e) => e.preventDefault());

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
    };
  }, []);



  return (
    <AnimatedRoutes />
  );
}

export default App;