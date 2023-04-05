import "./Footer.css";
import logoFooter from "../../assets/images/logo/Logo.png";

function Footer() {
    return(
        <footer>
            <div id="footer-container">
                <img src={logoFooter} alt="Logo" />
                <p>&copy; 2020 Kasa. Tous droits réservés</p>
            </div>
        </footer>
    );
}

export default Footer;