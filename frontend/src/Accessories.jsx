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
      <img src="/static/accessories.png" alt="iPad" style={{ width: "300px", height: "auto", marginTop: "20px" }} />
    </div>
  );
}
