import React from 'react';
import data from './data';

const { companies } = data

function companiesApp(){
  return(
      <div id= 'companies'>
        <h2>Company List ({ companies.length })</h2>
        <ul>
          {
            companies.map(company => {
              return(
                <li key= {company.id}>
                { company.name }
                <br/>
                in {company.state}
                </li>)
            })
          }
        </ul>

      </div>
  );
}

export default companiesApp;
