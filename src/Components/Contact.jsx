import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-[50vh] flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/60 rounded-lg p-8 text-stone-200 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Kontakt — Pizzarriba</h2>
                    <p className="mb-6 text-stone-200/90">Masz pytanie dotyczące menu, rezerwacji lub dostawy? Chętnie pomożemy. Możesz do nas zadzwonić, napisać e‑mail lub wypełnić formularz po prawej stronie — odpowiadamy na wiadomości zwykle w ciągu kilku godzin.</p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-amber-400 text-2xl">📞</span>
                            <div>
                                <div className="text-sm text-stone-400">Telefon</div>
                                <a href="tel:+48123456789" className="font-semibold text-stone-100">+48 123 456 789</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-amber-400 text-2xl">✉️</span>
                            <div>
                                <div className="text-sm text-stone-400">E‑mail</div>
                                <a href="mailto:kontakt@pizzarriba.example" className="font-semibold text-stone-100">kontakt@pizzarriba.example</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-amber-400 text-2xl">📍</span>
                            <div>
                                <div className="text-sm text-stone-400">Adres</div>
                                <div className="font-semibold text-stone-100">ul. Przykładowa 1, 00-000 Miasto</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-amber-400 text-2xl">🕒</span>
                            <div>
                                <div className="text-sm text-stone-400">Godziny otwarcia</div>
                                <div className="font-semibold text-stone-100">Pn–Pt: 11:00–22:00 • Sb–Nd: 12:00–23:00</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 text-sm text-stone-400">Chcesz złożyć zamówienie online? Sprawdź naszą sekcję <a href="/menu" className="text-amber-400 underline">Menu</a> lub zadzwoń.</div>
                </div>

                <div className="bg-slate-800/60 rounded-lg p-8 text-stone-200 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Napisz do nas</h3>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div>
                            <label className="block text-sm mb-1">Imię</label>
                            <input name="name" type="text" className="w-full rounded px-3 py-2 border-1 text-stone-100" placeholder="Twoje imię" />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">E‑mail</label>
                            <input name="email" type="email" className="w-full rounded px-3 py-2 border-1 text-stone-100" placeholder="twoj@email.com" />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Wiadomość</label>
                            <textarea name="message" rows={5} className="w-full rounded px-3 py-2 border-1 text-stone-100" placeholder="Napisz wiadomość..." />
                        </div>

                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded">Wyślij wiadomość</button>
                            <div className="text-sm text-stone-400">Odpowiadamy zwykle w kilka godzin.</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
