import { Link } from "react-router-dom";
export default function Macbook() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: 48, color: '#3490fa', fontWeight: 700, marginBottom: 0, letterSpacing: 1 }}>iPad </h1>
      <nav style={{ margin: '24px 0 32px 0', fontSize: 16 }}>
        <Link to="/" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Home</Link>
        <Link to="/ipad" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>ipad</Link>
        <Link to="/iphone" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>iphone</Link>
        <Link to="/macbook" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Macbook</Link>
        <Link to="/accessories" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Accessories</Link>
      </nav>
      <img src="/static/laptop.png" alt="Macbook" style={{ width: "180px", height: "auto", marginTop: "20px" }} />
      <p style={{ marginTop: 18, fontSize: 18, color: '#444', textAlign: 'center', maxWidth: 400 }}>
        MacBook M4 features:
        <ul style={{ textAlign: 'left', margin: '16px auto', maxWidth: 350, fontSize: 16, color: '#444' }}>
          <li>Apple M4 chip with advanced performance and efficiency</li>
          <li>High-resolution Retina display</li>
          <li>Up to 32GB unified memory</li>
          <li>Fast SSD storage</li>
          <li>Long battery life (up to 20 hours)</li>
          <li>Lightweight and slim design</li>
          <li>Thunderbolt 4 and USB-C ports</li>
          <li>macOS Sonoma</li>
        </ul>
      </p>
    </div>
  );
}
