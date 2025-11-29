import React from 'react'

const Reservations = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-slate-800/60 rounded-lg p-8 text-stone-200">
                <h2 className="text-3xl font-bold mb-4">Reservations</h2>
                <p className="mb-4">Rezerwacje przyjmujemy telefonicznie lub przez formularz poniżej (przykładowa strona).</p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1">Name</label>
                        <input className="w-full rounded px-3 py-2 bg-slate-700 text-stone-100" placeholder="Twoje imię" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input className="rounded px-3 py-2 bg-slate-700 text-stone-100" placeholder="Date" />
                        <input className="rounded px-3 py-2 bg-slate-700 text-stone-100" placeholder="Time" />
                    </div>
                    <div>
                        <textarea className="w-full rounded px-3 py-2 bg-slate-700 text-stone-100" placeholder="Uwagi" rows={3} />
                    </div>
                    <button type="button" className="bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded">Send request</button>
                </form>
            </div>
        </div>
    )
}

export default Reservations
