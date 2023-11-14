import './App.css';
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tile1 from "./components/Routes/Tile1"
import Tile2 from "./components/Routes/Tile2"
import Tile3 from "./components/Routes/Tile3"
import Tile4 from "./components/Routes/Tile4"
import Tile5 from "./components/Routes/Tile5"
import Tile6 from "./components/Routes/Tile6"
import Tile7 from "./components/Routes/Tile7"
import Tile8 from "./components/Routes/Tile8"
import Tile9 from "./components/Routes/Tile9"
import Tile10 from "./components/Routes/Tile10"



function App() {

  return (
    <Router>
      <div className="EastieUnits">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/Tile1" element={<Tile1 />} />
            <Route path="/Tile2" element={<Tile2 />} />
            <Route path="/Tile3" element={<Tile3 />} />
            <Route path="/Tile4" element={<Tile4 />} />
            <Route path="/Tile5" element={<Tile5 />} />
            <Route path="/Tile6" element={<Tile6 />} />
            <Route path="/Tile7" element={<Tile7 />} />
            <Route path="/Tile8" element={<Tile8 />} />
            <Route path="/Tile9" element={<Tile9 />} />
            <Route path="/Tile10" element={<Tile10 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
