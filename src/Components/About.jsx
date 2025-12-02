import React from 'react'
import AboutHero from './AboutHero.jsx'
import HistoryParagraph from './HistoryParagraph.jsx'
import FounderCard from './FounderCard.jsx'
import SpeedyGonzales from '../assets/Speedy_Gonzales.webp'

const About = () => {
    return (
        <div className=" text-stone-200">
            <AboutHero />

            <div className="">
                <HistoryParagraph
                    title="Początek historii"
                    text="Pizzarriba została założona w 2010 roku przez dwóch pasjonatów włoskiej kuchni. Wszystko zaczęło się w małej, klimatycznej lokalizacji w centrum miasta. Z miłości do autentycznej pizzy i tradycyjnych receptur, właściciele postanowili stworzyć miejsce, gdzie każdy mógłby cieszyć się smakami Italii.\n\nPierwsze lata były pełne wyzwań, ale dzięki konsekwencji i zaangażowaniu zespołu, Pizzarriba szybko zyskała reputację najlepszej pizzerii w okolicy."
                    image={SpeedyGonzales}
                    imagePosition="right"
                />

                <HistoryParagraph
                    title="Rozwijanie się"
                    text="Pod koniec 2015 roku, ze względu na rosnące zainteresowanie, zdecydowaliśmy się przenieść do większej lokali. Nowa przestrzeń pozwoliła nam na otwarcie pełnoprawnej kuchni i zwiększenie zespołu pracowników.\n\nW tym samym roku uruchomiliśmy usługę dostawy, która pozwoliła nam docierać do jeszcze większej liczby klientów. Dzisiaj dowozimy pizzę do całego miasta w zaledwie 30 minut!"
                    image={SpeedyGonzales}
                    imagePosition="left"
                />

                <HistoryParagraph
                    title="Nowoczesne czasty"
                    text="Dzisiaj Pizzarriba to nie tylko pizzeria. To miejsce spotkań, gdzie ludzie mogą się odprężyć i cieszyć autentyczną włoską kuchnią. Nasze menu rozszerzyło się o burgery, tacos i wiele innych specjałów, ale pizza pozostaje naszą specjalnością.\n\nWciąż wierzymy, że jakość i tradycja to klucz do sukcesu. Każda pizza przygotowywana jest ze świeżych składników, a nasze recepty pochodzą bezpośrednio z włoskich ksiąg rodzinnych."
                    imagePosition="right"
                />
            </div>

            <section className="py-16 px-4 ">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8 text-amber-400 text-center">Nasz zespół</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FounderCard
                            name="Marco Rossi"
                            role="Właściciel & Szef kuchni"
                            description="Marco przywióż recepty swoje babci z Neapolu. Ma 20 lat doświadczenia w kulinaryce."
                            image={SpeedyGonzales}
                        />
                        <FounderCard
                            name="Anna Verdi"
                            role="Współwłaścicielka"
                            description="Anna odpowiada za obsługę klienta i zarządzanie zespołem. Jej uśmiech jest serdecznym powitaniem dla każdego gościa."
                            image={SpeedyGonzales}
                        />
                        <FounderCard
                            name="Luca Bianchi"
                            role="Szef dostawy"
                            description="Luca zapewnia, że każda pizza dotrze do ciebie w doskonałym stanie. Zawsze punktualny i profesjonalny."
                            image={SpeedyGonzales}
                        />
                    </div>
                </div>
            </section>

            <section className="py-12 px-4  border-t border-slate-700">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-4">Nasze wartości</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <span className="text-4xl">🍕</span>
                            <h4 className="text-lg font-semibold mt-2">Jakość</h4>
                            <p className="text-stone-400 text-sm">Tylko najlepsze składniki z włoskich dostawców.</p>
                        </div>
                        <div>
                            <span className="text-4xl">❤️</span>
                            <h4 className="text-lg font-semibold mt-2">Pasja</h4>
                            <p className="text-stone-400 text-sm">Każda pizza robiona z miłością i zaangażowaniem.</p>
                        </div>
                        <div>
                            <span className="text-4xl">⚡</span>
                            <h4 className="text-lg font-semibold mt-2">Szybkość</h4>
                            <p className="text-stone-400 text-sm">Dostawa w 30 minut lub mniej gwarantowana.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
