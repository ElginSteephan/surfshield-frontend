import "./navbar.css";
function Navbar() {
  return (
    <header>
      <span className="logo">
        <img src="/asset/logo.png" className="navLogo" alt="lo"/>
        <p>SurfShield</p>
      </span>

      <div className="link">
        <a href="#">Home
        </a>
        <a href="#team">Team
        </a>
        <a href="#about">About
        </a>
      </div>
    </header>
  );
}
export default Navbar;
