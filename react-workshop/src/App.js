import React from 'react';
import ProductApp from './ProductList'
import CompanyList from './CompanyList'
import UserList from './UserList'

function App() {
  return (
    <main>
      <ProductApp />
      <UserList />
      <CompanyList />
    </main>
  );
}

export default App;
