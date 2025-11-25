import React from 'react';
import SpeedyGonzales from '../assets/Speedy_gonzales.svg'; // Upewnij się, że plik istnieje w tej ścieżce


const Header = () => {
    return (
        <header className=" flex flex-col items-center">
            <div className="flex flex-col items-center gap-4">
                <img
                    src={SpeedyGonzales}
                    alt="Pizzarriba Logo"
                    className="w-60 h-auto"
                />
                <h1 className="text-6xl font-bold text-center text-stone-200">Pizzarriba</h1>
            </div>

            <nav className="mt-6">
                <ul className="flex gap-6 list-none p-0 m-0 text-amber-500">
                    <li>
                        <a className="text-lg hover:underline" href="#menu">
                            Menu
                        </a>
                    </li>
                    <li>
                        <a className="text-lg hover:underline" href="#about">
                            O nas
                        </a>
                    </li>
                    <li>
                        <a className="text-lg hover:underline" href="#contact">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;