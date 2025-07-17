import { Link } from "react-router-dom";
export default function Ipad() {
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
      <img src="/static/ipad.png" alt="iPad" style={{ width: "180px", height: "auto", marginTop: "20px" }} />
      <p style={{ marginTop: 18, fontSize: 18, color: '#444', textAlign: 'center', maxWidth: 400 }}>
        Apple iPad (2025) specifications:
        <ul style={{ textAlign: 'left', margin: '16px auto', maxWidth: 350, fontSize: 16, color: '#444' }}>
          <li>Apple M4 chip for fast performance and efficiency</li>
          <li>12.9-inch Liquid Retina XDR display</li>
          <li>Up to 16GB RAM</li>
          <li>Up to 2TB SSD storage</li>
          <li>Wi-Fi 6E and 5G connectivity</li>
          <li>Apple Pencil Pro support</li>
          <li>Ultra-wide 12MP front camera</li>
          <li>Long battery life (up to 12 hours)</li>
          <li>iPadOS 19</li>
        </ul>
      </p>
    </div>
  );
}
