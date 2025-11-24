import React from 'react';
import SpeedyGonzales from '../assets/Speedy_gonzales.webp'; // Upewnij się, że plik istnieje w tej ścieżce
// import './Header.css'; // opcjonalnie, jeśli chcesz dodać style

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={SpeedyGonzales} alt="Pizzarriba Logo" />
                <h1>Pizzarriba</h1>
            </div>
            <nav className="header__nav">
                <ul>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">O nas</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;