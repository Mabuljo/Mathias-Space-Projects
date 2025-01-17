import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src="/astronaut.png" alt="logo astronaute" />
            <nav>
                <NavLink to="/accueil" className={(nav) => nav.isActive ? "nav-active" : ""}>Accueil</NavLink>
                <NavLink to="/a-propos" className={(nav) => nav.isActive ? "nav-active" : ""}>À propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;