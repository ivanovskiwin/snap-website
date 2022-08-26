import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
