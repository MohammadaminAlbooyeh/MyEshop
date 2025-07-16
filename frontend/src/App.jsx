import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import iPad from './iPad';
import iPhone from './iPhone';
import MacBook from './MacBook';
import Home from './Home';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="eshop-container">
        <h1>myEShop 🛒</h1>
        <h2>Product List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul className="product-list">
            {products.map((p) => (
              <li key={p.id} className="product-item">
                <img
                  src={p.image && p.image.startsWith('/static') ? `http://localhost:8000${p.image}` : p.image}
                  alt={p.name}
                  className="product-img"
                />
                <div className="product-info">
                  <strong>{p.name}</strong>
                  <div className="desc">{p.description}</div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipad" element={<iPad />} />
          <Route path="/iphone" element={<iPhone />} />
          <Route path="/macbook" element={<MacBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
