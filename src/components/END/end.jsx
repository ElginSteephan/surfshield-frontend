import "./end.css";

function END() {
  return (
    <footer>
      <span className="logos">
        <img src="/asset/logo.png" className="navLogos" alt="lo" />
        <p>SurfShield</p>
      </span>

      <div className="links">
        <a href="#">Home</a>
        <a href="#">Download</a>
        <a href="#about">About</a>
      </div>
      <div className="policy">
        <p>© 2024 SurfSheild. All rights reserved.</p>
        <span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
}

export default END;
