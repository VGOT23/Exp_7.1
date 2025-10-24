import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🛍️ Product List</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: '1px solid #ccc',
              padding: '15px',
              borderRadius: '10px',
              width: '200px',
              background: '#f9f9f9',
            }}
          >
            <h3>{p.name}</h3>
            <p>💸 ₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
