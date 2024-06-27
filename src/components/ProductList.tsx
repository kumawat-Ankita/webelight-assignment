import React from 'react';
import './ProductList.css';
import { useProducts } from '../queries';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/productSlice';

const ProductList: React.FC = () => {
  const { data, error, isLoading } = useProducts();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div>
      {data.map((product: any) => (
        <div key={product.id} className='product-item'>
          <h3>{product.name}</h3>
          <p>Rs. {product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
