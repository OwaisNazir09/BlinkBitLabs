import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div style={{ paddingTop: "90px", background: "#fff" }}>
        <AppRouter />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
