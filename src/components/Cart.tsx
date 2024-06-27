import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, updateQuantity } from '../redux/slices/productSlice';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {cart.map((item) => (
        <div key={item.id} className='cart-item'>
          <h3>{item.name}</h3>
          <p>Rs. {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>-</button>
          <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
