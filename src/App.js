import "./App.css";
import React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    // <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    // </ChakraProvider>
  );
}

export default App;
