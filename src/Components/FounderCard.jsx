import React from 'react'

const FounderCard = ({ name, role, description, image }) => {
    return (
        <div className="bg-slate-800/60 rounded-lg p-6 text-center text-stone-200 shadow-lg">
            {image && (
                <img
                    src={image}
                    alt={name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
            )}
            <h4 className="text-xl font-bold text-amber-400">{name}</h4>
            <p className="text-sm text-stone-400 mb-3">{role}</p>
            <p className="text-stone-300 text-sm">{description}</p>
        </div>
    )
}

export default FounderCard
