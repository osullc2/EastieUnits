import "./Header.css"

function Header() {
    return(
        <>
            <div className="header">
                <div className = "title">
                    EastieUnits
                </div>

                <nav className="navbar">
                    <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/search">Search</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/contact">Contact Info</a>
                    </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default Header;