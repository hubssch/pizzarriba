import React from 'react';
// import './Content.css';

const Content = () => {
    const burgers = [
        { id: 1, name: 'Classic Burger', price: '$9.99' },
        { id: 2, name: 'Cheese Burger', price: '$10.99' },
        { id: 3, name: 'Bacon Burger', price: '$12.99' }
    ];

    const pizzas = [
        { id: 1, name: 'Margherita', price: '$11.99' },
        { id: 2, name: 'Pepperoni', price: '$12.99' },
        { id: 3, name: 'Vegetarian', price: '$10.99' }
    ];

    const tacos = [
        { id: 1, name: 'Beef Tacos', price: '$8.99' },
        { id: 2, name: 'Chicken Tacos', price: '$8.99' },
        { id: 3, name: 'Fish Tacos', price: '$9.99' }
    ];

    return (
        <div className="content flex  text-stone-200">
            <section className="container burgers-container ">
                <h2 className='mx-40 px-6 font-bold text-4xl'>Burgers</h2>
                <div className="items border p-4 m-8">
                    {burgers.map(burger => (
                        <div key={burger.id} className="item">
                            <h3>{burger.name}</h3>
                            <p>{burger.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container pizzas-container">
                <h2 className='mx-40 px-6 font-bold text-4xl'>Pizzas</h2>
                <div className="items border p-4 m-8">
                    {pizzas.map(pizza => (
                        <div key={pizza.id} className="item">
                            <h3>{pizza.name}</h3>
                            <p>{pizza.price}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container tacos-container">
                <h2 className='mx-40 px-6 font-bold text-4xl'>Tacos</h2>
                <div className="items border  p-4 m-8">
                    {tacos.map(taco => (
                        <div key={taco.id} className="item">
                            <h3>{taco.name}</h3>
                            <p>{taco.price}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Content;