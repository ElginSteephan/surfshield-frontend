import "./about.css";

export default function About() {
  return (
    <div className="aboutSection" id="about">
      <div className="content">
        <h1>
          About <span>SURFSHIELD</span>
        </h1>
        <p>
          Scanning for vulnerabilities is the process of identifying and
          assessing security weaknesses in your systems and software. It helps
          you protect your data and assets from cyberattacks and comply with
          security standards and regulations. These tools can help you find and
          fix common vulnerabilities, such as injection, broken authentication,
          sensitive data exposure, etc. 
        </p>
      </div>

      <img src="../../asset/logo.png" alt="logo" />
    </div>
  );
}
