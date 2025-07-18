import { Link } from "react-router-dom";
export default function Accessories() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
      <h1 style={{ fontSize: 48, color: '#3490fa', fontWeight: 700, marginBottom: 0, letterSpacing: 1 }}>Accessories</h1>
      <nav style={{ margin: '24px 0 32px 0', fontSize: 16 }}>
        <Link to="/" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Home</Link>
        <Link to="/ipad" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>ipad</Link>
        <Link to="/iphone" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>iphone</Link>
        <Link to="/macbook" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Macbook</Link>
        <Link to="/accessories" style={{ color: '#3490fa', textDecoration: 'none', margin: '0 18px', fontWeight: 500 }}>Accessories</Link>
      </nav>
      <img src="/static/accessories.png" alt="Accessories" style={{ width: "180px", height: "auto", marginTop: "20px" }} />
      <p style={{ marginTop: 18, fontSize: 18, color: '#444', textAlign: 'center', maxWidth: 400 }}>
        Apple Headphone (AirPods Max) specifications:
        <ul style={{ textAlign: 'left', margin: '16px auto', maxWidth: 350, fontSize: 16, color: '#444' }}>
          <li>Apple-designed dynamic drivers for high-fidelity audio</li>
          <li>Active Noise Cancellation and Transparency mode</li>
          <li>Spatial audio with dynamic head tracking</li>
          <li>Custom acoustic design and memory foam ear cushions</li>
          <li>Up to 20 hours of battery life</li>
          <li>Digital Crown for precise volume control</li>
          <li>H1 chips for seamless connectivity</li>
          <li>Available in multiple colors</li>
        </ul>
      </p>
    </div>
  );
}
