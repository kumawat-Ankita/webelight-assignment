import React from 'react';
import './App.css'
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className='container'>
          <div >
          <h1>Product List</h1>
          <ProductList />
          </div>
          <div>
          <h1>Cart</h1>
          <Cart />
          </div>
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

