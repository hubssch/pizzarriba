import React from 'react';
// import './Content.css';

const Content = () => {
    const burgers = [
        { id: 1, name: 'Classic Burger', price: '$9.99', description: 'Wołowa kotlet, sałata, pomidor, cebula, pikle, sos specjalny' },
        { id: 2, name: 'Cheese Burger', price: '$10.99', description: 'Klasyczny burger z podwójnym serem cheddar i karmelizowaną cebulą' },
        { id: 3, name: 'Bacon Burger', price: '$12.99', description: 'Soczysty kotlet wołowy, bekon, ser, miks sałat i BBQ' },
        { id: 4, name: 'Mushroom Swiss', price: '$11.99', description: 'Smażone pieczarki, ser Swiss, majonez ziołowy' },
        { id: 5, name: 'Spicy Jalapeño', price: '$11.49', description: 'Pikantny sos, jalapeño, ser pepper jack, chrupiąca cebulka' },
        { id: 6, name: 'Veggie Deluxe', price: '$10.49', description: 'Kotlet warzywny, awokado, rukola, sos tahini' }
    ];

    const pizzas = [
        { id: 1, name: 'Margherita', price: '$11.99', description: 'Sos pomidorowy, świeża mozzarella, bazylia, oliwa z oliwek' },
        { id: 2, name: 'Pepperoni', price: '$12.99', description: 'Klasyczne pepperoni na cienkim cieście, extra ser' },
        { id: 3, name: 'Vegetarian', price: '$10.99', description: 'Papryka, cebula, oliwki, pieczarki, ser mozzarella' },
        { id: 4, name: 'Four Cheese', price: '$13.49', description: 'Mozzarella, gorgonzola, parmesan, pecorino' },
        { id: 5, name: 'BBQ Chicken', price: '$13.99', description: 'Kurczak w sosie BBQ, czerwona cebula, kolendra' },
        { id: 6, name: 'Prosciutto & Arugula', price: '$14.49', description: 'Prosciutto, rukola, parmezan, kropla balsamico' }
    ];

    const tacos = [
        { id: 1, name: 'Beef Tacos', price: '$8.99', description: 'Marynowana wołowina, salsa pico de gallo, limonka' },
        { id: 2, name: 'Chicken Tacos', price: '$8.99', description: 'Soczysty kurczak, kremowy sos chipotle, kapusta' },
        { id: 3, name: 'Fish Tacos', price: '$9.99', description: 'Panierowana ryba, sos jogurtowy, salsa mango' },
        { id: 4, name: 'Carnitas', price: '$9.49', description: 'Powolnie duszona wieprzowina, kolendra, cebula' },
        { id: 5, name: 'Veggie Tacos', price: '$8.49', description: 'Smażone warzywa, czarna fasola, awokado' },
        { id: 6, name: 'Shrimp Tacos', price: '$10.49', description: 'Krewetki z czosnkiem, pikantna kolendra, limonka' }
    ];

    return (
        <div className="content flex items-center text-stone-200 px-4">
            <section className="container burgers-container ">
                <h2 className='mx-10 px-6 font-bold text-4xl mb-4 '>Burgers</h2>
                <div className="items">
                    {burgers.map(burger => (
                        <div key={burger.id} className="item border-b border-amber-500 p-4 last:border-b-0 mx-4">
                            <div className='flex justify-between items-start gap-4'>
                                <div>
                                    <h3 className='font-bold text-xl'>{burger.name}</h3>
                                    <p className='text-sm text-stone-200/90 mt-2'>{burger.description}</p>
                                </div>
                                <div className='text-lg font-semibold'>{burger.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container pizzas-container">
                <h2 className='mx-10 px-6 font-bold text-4xl mb-4'>Pizzas</h2>
                <div className="items">
                    {pizzas.map(pizza => (
                        <div key={pizza.id} className="item border-b border-amber-500 p-4 last:border-b-0 mx-4">
                            <div className='flex justify-between items-start gap-4'>
                                <div>
                                    <h3 className='font-bold text-xl'>{pizza.name}</h3>
                                    <p className='text-sm text-stone-200/90 mt-2'>{pizza.description}</p>
                                </div>
                                <div className='text-lg font-semibold'>{pizza.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container tacos-container">
                <h2 className='mx-10 px-6 font-bold text-4xl mb-4'>Tacos</h2>
                <div className="items">
                    {tacos.map(taco => (
                        <div key={taco.id} className="item border-b border-amber-500 p-4 last:border-b-0 mx-4">
                            <div className='flex justify-between items-start gap-4'>
                                <div>
                                    <h3 className='font-bold text-xl'>{taco.name}</h3>
                                    <p className='text-sm text-stone-200/90 mt-2'>{taco.description}</p>
                                </div>
                                <div className='text-lg font-semibold'>{taco.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Content;