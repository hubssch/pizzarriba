import React from 'react'

const Contact = () => {
    return (
        <div className="min-h-[50vh] flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-slate-800/60 rounded-lg p-8 text-stone-200">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <p className="mb-4">Masz pytanie? Napisz do nas lub zadzwoń.</p>
                <ul className="space-y-2">
                    <li>Phone: <strong>+48 123 456 789</strong></li>
                    <li>Email: <strong>kontakt@pizzarriba.example</strong></li>
                    <li>Address: <strong>ul. Przykładowa 1, Miasto</strong></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
