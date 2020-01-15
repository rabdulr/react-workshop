import React from 'react';
import data from './data';

const { users, companies } = data

function usersApp(){
  return(
      <div id= 'users'>
        <h2>Company List ({ users.length })</h2>
        <ul>
          {
            users.map(user => {
                const company = companies.find( company => company.id === user.companyId)
                return(
                    <li key= {user.id}>
                        { user.name } from { user.state } works for { company.name }
                    </li>)
            })
          }
        </ul>
      </div>
  );
}

export default usersApp;