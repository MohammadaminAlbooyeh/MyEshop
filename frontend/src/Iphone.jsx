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
              <img src="/static/iphone.png" alt="iPhone" style={{ width: "180px", height: "auto", marginTop: "20px" }} />
              <p style={{ marginTop: 18, fontSize: 18, color: '#444', textAlign: 'center', maxWidth: 400 }}>
                iPhone Pro 16 specifications:
                <ul style={{ textAlign: 'left', margin: '16px auto', maxWidth: 350, fontSize: 16, color: '#444' }}>
                  <li>Apple A19 Bionic chip for top performance</li>
                  <li>6.7-inch Super Retina XDR display (120Hz)</li>
                  <li>Triple 48MP Pro camera system with LiDAR</li>
                  <li>Up to 12GB RAM</li>
                  <li>Up to 1TB storage</li>
                  <li>5G and Wi-Fi 7 connectivity</li>
                  <li>Face ID and under-display Touch ID</li>
                  <li>Battery life up to 28 hours</li>
                  <li>iOS 19</li>
                </ul>
              </p>
    </div>
  );
}
