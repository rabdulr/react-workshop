import React from 'react';
import data from './data';

const { products } = data

function productApp(){
  return(
      <div id= 'products'>
        <h2>Product List ({ products.length })</h2>
        <ul>
          {
            products.map(product => {
              return(
                <li key= {product.id}>
                { product.name }
                <br/>
                made from {product.material}
                </li>)
            })
          }
        </ul>

      </div>
  );
}

export default productApp;
