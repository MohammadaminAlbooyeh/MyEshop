
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ipad from './Ipad.jsx';
import Iphone from './Iphone.jsx';
import Macbook from './Macbook.jsx';
// Placeholder for Accessories page/component if needed
import './App.css';


function Home() {
  // Category data for Home page
  const categories = [
    {
      name: 'iPad',
      link: '/ipad',
      img: '/static/ipad.png',
    },
    {
      name: 'iPhone',
      link: '/iphone',
      img: '/static/iphone.png',
    },
    {
      name: 'Macbook',
      link: '/macbook',
      img: '/static/laptop.png',
    },
    {
      name: 'Accessories',
      link: '/accessories',
      img: '/static/accessories.png',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#fff', padding: 0, margin: 0 }}>
      <header style={{ textAlign: 'center', paddingTop: 40 }}>
        <h1 style={{ fontSize: 48, color: '#3490fa', fontWeight: 700, marginBottom: 0, letterSpacing: 1 }}>
          MyEShop
        </h1>
        <nav style={{ margin: '24px 0 32px 0', fontSize: 16 }}>
          <Link to="/" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Home</Link>
          <Link to="/ipad" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>ipad</Link>
          <Link to="/iphone" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>iphone</Link>
          <Link to="/macbook" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Macbook</Link>
          <Link to="/accessories" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Accessories</Link>
        </nav>
      </header>
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 40, flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.link} style={{ textDecoration: 'none' }}>
              <div style={{
                width: 180,
                height: 180,
                background: '#f7f8fa',
                borderRadius: 18,
                boxShadow: '0 2px 12px #0001',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
                transition: 'box-shadow 0.2s',
                cursor: 'pointer',
              }}>
                <img
                  src={cat.img}
                  alt={cat.name}
                  style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: 16 }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <span style={{ fontSize: 22, color: '#222', fontWeight: 600 }}>{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/macbook" element={<Macbook />} />
        {/* Accessories page can be added here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
