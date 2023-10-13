import './App.css';
import Contact from "./components/Contact"
import Header from "./components/Header"
import Desc from "./components/Desc"

function App() {

  return (
    
    <div className="EastieUnits">
      <Header />
      <Desc />


      <p1>EastieUnits is a website designated for the use of property managers and tenants/potential tenants, 
          specifically in the Boston area, to act as a liaison between them.</p1>
      <Contact />
    </div>

  );
}

export default App;
