import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/Footer';
import Header from './components/Header';
import MyNavbar from './components/MyNavbar';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <MyNavbar />
    <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route path='/aboutus' element={<></>}></Route>
      <Route path='/contact' element={<></>}></Route>
      <Route path='/movieslinks' element={<></>}></Route>
      <Route path='/login' element={<></>}></Route>
      <Route path='/signup' element={<></>}></Route>
    </Routes>
    <h1 style={{color:'Blue'}}>Welcome to Movie App Project</h1>   
    <Footer /> 
    </div>
  );
}

export default App;
