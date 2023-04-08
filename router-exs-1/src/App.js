import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Coke from './pages/Coke';
import DrPepper from './pages/DrPepper';
import Pepsi from './pages/Pepsi';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='coke' element={ <Coke /> } />
        <Route path='drpepper' element={ <DrPepper /> } />
        <Route path='pepsi' element={ <Pepsi /> } />
      </Routes>
    </>
  );
}

export default App;
