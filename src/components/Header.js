import "./Header.css"

function Header() {
    return(
        <>
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
        </>
    )
}

export default Header;