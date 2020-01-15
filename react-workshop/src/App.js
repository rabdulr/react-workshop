import React from 'react';
import ProductApp from './ProductList'
import CompanyList from './CompanyList'
import UserList from './UserList'
import Stats from './Stats'

function App() {
  return (
    <main>
      <ProductApp />
      <UserList />
      <CompanyList />
      <Stats />
    </main>
  );
}

export default App;
