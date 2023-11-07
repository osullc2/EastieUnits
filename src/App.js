import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tile1 from "./components/Routes/Tile1"

function App() {

  return (
    <Router>
      <div className="EastieUnits">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Tile1" element={<Tile1 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
