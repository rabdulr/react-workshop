import React from 'react';
import data from './data';
console.log(data);
function productApp(){
  return(



      <div id= 'products'>
      {
        data.products.map(product => {
          return(
            <div key= {product.id}>
            { product.name }
            <br/>
            made from {product.material}
            </div>)
        })
      }
      </div>



  );
}

export default productApp;
