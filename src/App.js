import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import NewMovie from './components/NewMovie';

function App() {
  return (
    <div className="App">
    <h1 style={{color:'Blue'}}>Welcome to Movie App Project</h1>  
    <NewMovie/>  
    </div>
  );
}

export default App;
