import {Link} from "react-router-dom";
import "./footer.css";

export default function Footer(){
    return(
        <footer >
            <section>
            <div className="footer" >
            <img src="/logoo.png" alt="SeeFlix Logo" className="footer-logo" />
            <div className="footer-menu">
                <h3>Menu</h3>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/media">Contact</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/login">Login</Link></li>
            </div>
            <div className="footer-contact">
                <h3> Contact </h3>
                <p>contact@seeflix.com</p>
                <p>+509 37077932</p>
                <p>Puits-Salés, Sud Haiti</p>
            </div>
            </div>
            </section>

            <p> All rights reserved SeeFlix 2026</p>
        </footer>
    ); 
}