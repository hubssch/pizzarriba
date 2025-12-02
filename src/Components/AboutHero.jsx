import React from 'react'
import SpeedyGonzales from '../assets/Speedy_Gonzales.webp'

const AboutHero = () => {
    return (
        <section className=" py-16 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-stone-200">
                    <h1 className="text-5xl font-bold mb-4 text-amber-400">Pizzarriba</h1>
                    <p className="text-lg mb-3">Twoja ulubiona pizzeria z autentycznym duchem Włoch.</p>
                    <p className="text-sm text-stone-300">Od 2010 roku serwujemy najlepszą pizzę w mieście, tworzoną z passion i najwyższej jakości składników.</p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={SpeedyGonzales}
                        alt="Pizzarriba Logo - Speedy Gonzales"
                        className="w-full max-w-sm h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutHero
