import React from 'react'

const HistoryParagraph = ({ title, text, image, imagePosition = 'right' }) => {
    const imageElement = image ? (
        <div className="flex justify-center md:flex-1">
            <img
                src={image}
                alt={title}
                className="w-full max-w-sm h-auto rounded-lg shadow-lg object-cover"
            />
        </div>
    ) : null

    const content = (
        <div className="md:flex-1">
            <h3 className="text-2xl font-bold mb-3 text-amber-400">{title}</h3>
            <p className="text-stone-300 leading-relaxed whitespace-pre-line">{text}</p>
        </div>
    )

    return (
        <section className="py-12 px-4 border-b border-slate-700 last:border-b-0">
            <div className="max-w-5xl mx-auto">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${imagePosition === 'left' ? 'md:grid-flow-col-dense' : ''}`}>
                    {imagePosition === 'left' && imageElement}
                    {content}
                    {imagePosition === 'right' && imageElement}
                </div>
            </div>
        </section>
    )
}

export default HistoryParagraph
