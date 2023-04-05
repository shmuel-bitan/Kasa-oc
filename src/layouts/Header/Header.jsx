import "./Header.css";
import logoHeader from "../../assets/images/logo/Logo1.png";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <img src={logoHeader} alt="Logo"/>
            <nav>
                <NavLink to="/accueil" className="lien-site lien-menu">Accueil</NavLink>
                <NavLink to="/a-propos" className="lien-site lien-menu">À propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;