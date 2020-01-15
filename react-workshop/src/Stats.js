import React from 'react';
import data from './data';

const { users, companies, products } = data

const getState = (info) => {

    const states = info.reduce( (acc, item) => {
        const key = item.state;
        acc[key] = info.filter(state => state.state === key).length
        return acc;
    }, {});
    
    const state = Object.keys(states)
    
    const values = Math.max(...Object.values(states))
    const valIndex = Object.values(states).indexOf(values)
    const finalState = state[valIndex]

    const final = [ finalState, values ]

    return final;

}

console.log(products)

function statsApp(){
    return(
        <div>
            <h2>Stats</h2>
                <ul>
                    <li>
                    The most popular state for users is { getState(users)[0] } with { getState(users)[1] } users.
                    </li>
                    <li>
                    The most popular state for companies is { getState(companies)[0] } with { getState(companies)[1]} companies.
                    </li>
                    <li>
                    The most popular material for producs is { getState(products)[0]} with { getState(products)[1]} products.
                    </li>
                </ul>
        </div>
    );
}

export default statsApp;
