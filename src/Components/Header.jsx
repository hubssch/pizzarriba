import React from 'react';
import { Link } from 'react-router-dom'
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
                <ul className="flex gap-6 list-none p-0 m-0 text-amber-500 text-lg md:text-2xl py-4">
                    <li>
                        <Link className="hover:bg-yellow-400 font-bold py-2 px-4 rounded transition" to="/menu">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:bg-yellow-400 font-bold py-2 px-4 rounded transition" to="/reservations">
                            Reservations
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:bg-yellow-400 font-bold py-2 px-4 rounded transition" to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:bg-yellow-400 font-bold py-2 px-4 rounded transition" to="/about">
                            About us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;