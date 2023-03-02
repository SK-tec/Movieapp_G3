import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbar from "./components/MyNavbar";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Watchlist from "./components/Watchlist";
import Trendingnow from "./components/Trendingnow";
import Recommended from "./components/Recommended";
//import Hero from "./components/Hero";

import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Header/>} />       
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/trendingnow" element={<Trendingnow />} />
        <Route path="/recommended" element={<Recommended />} />
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;