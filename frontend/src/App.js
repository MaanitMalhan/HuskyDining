import './App.css';
import Home from './page/home';  // Import Home component
import Menu from './page/Menu';
import Donation from './page/Donation';
import Menusupport from './components/Menusupport';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />   {/* Home Page */}
          <Route path="/menu" element={<Menu />} /> {/* Menu Page */}
          <Route path="/donation" element={<Donation />} /> {/* Donation Page */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;