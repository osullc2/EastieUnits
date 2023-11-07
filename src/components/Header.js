import { Link } from "react-scroll";
import "./Header.css"

function Header() {
    return (
      <>
        <div className="header">
          <div className="title">EastieUnits</div>
          <nav className="navbar">
            <ul className="navbar-list">
              <li class="navbar-item">
                <a href="/">Home </a>
              </li>
              <li class="navbar-item">
                <Link
                  to="search" // Use the ID of the target component you want to scroll to
                  smooth={true} // Smooth scrolling
                  duration={500}
                >
                  Search
                </Link>
              </li>
              <li class="navbar-item">
                <Link
                  to="contact"
                  smooth={true} 
                  duration={500} 
                >
                  Contact Info
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
  
  export default Header;