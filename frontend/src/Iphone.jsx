import './Ipad.css';
import iphoneImg from './static/iphone.png';

const navItems = ["Home", "ipad", "iphone", "macbook", "Accessories"];

export default function Iphone() {
  return (
    <div className="ipad-page">
      <header className="ipad-header">
        <h1 className="eshop-title">MyEshop</h1>
        <nav className="eshop-nav">
          {navItems.map(item => (
            <a key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
        </nav>
      </header>
      <main>
        <div className="ipad-card">
          <div className="ipad-image-container">
            <img src={iphoneImg} alt="iPhone" className="ipad-image" />
          </div>
          <div className="ipad-description">
            <h2 className="ipad-title">iPhone</h2>
            <p>
              Description about iPhone. This section can include specifications, features, and additional information about the iPhone product.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
