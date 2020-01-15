import React from 'react';
import data from './data';

const { users, companies, products } = data

const states = users.reduce( (acc, user) => {
    const key = user.state;
    acc[key] = users.filter(state => state.state === key).length
    return acc;
}, {});

const state = Object.keys(states)

const values = Math.max(...Object.values(states))
const valIndex = Object.values(states).indexOf(values)
const finalState = state[valIndex]




function statsApp(){
    return(
        <div>
            <h2>Stats</h2>
                <ul>
                    <li>
                    The most popular state for users is { finalState } with { values } users.
                    </li>
                    <li>
                    The most popular state for companies is {} with {} companies.
                    </li>
                    <li>
                    The most popular material for producs is {} with {} products.
                    </li>
                </ul>
        </div>
    );
}

export default statsApp;
