import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <h1 style={{color:'Blue'}}>Welcome to Movie App Project</h1>   
    <Footer /> 
    </div>
  );
}

export default App;
