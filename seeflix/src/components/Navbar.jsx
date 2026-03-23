import "./navbar.css";
export default function Navbar(){
    return(
        <nav className="navbar">
            <h2>SeeFlix</h2>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#media">Media</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}


