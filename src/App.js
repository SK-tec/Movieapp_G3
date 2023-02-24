import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Watchlist from "./components/Watchlist";
import Trendingnow from "./components/Trendingnow";
import Recommended from "./components/Recommended";

function App() {
  return (
    <>
      <Home />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/trendingnow" element={<Trendingnow />} />
          <Route path="/recommended" element={<Recommended />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
