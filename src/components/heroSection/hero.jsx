import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import "./hero.css";
import Chart from "./chart";
import { FaFilePdf } from "react-icons/fa6";

function HeroBG() {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const popupRef = useRef(null); // Ref for the popup

  const handleClick = () => {
    setShowPopup(true); // Set showPopup state to true when button is clicked
    // Smooth scroll to the section where the popup is located
    popupRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClose = () => {
    setShowPopup(false); // Set showPopup state to false to close the popup
    popupRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="BG">
        <h1>
          SCAN THE <span className="rot">WEBSITES</span> THAT YOU ARE WORRIED
          ABOUT
        </h1>

        <div className="space">
          <div className="SCANCOLO">
            <input type="text" placeholder="Enter or paste link here" />
            <button onClick={handleClick}>SCAN IT</button>
          </div>
          <p>Try our demo to see the magic</p>
        </div>

        {/* start of POPUP */}
        <div className={`popUp ${showPopup ? "show" : ""}`} ref={popupRef}>
          <span className="title">
            <h1>Vulnerability Test report</h1>
            <IoClose onClick={handleClose} size={30} />
          </span>

          <div className="popupContainer">
            <span>
              <h3>Risk Rating</h3>
              <Chart />
            </span>
            <span>
              <h3>Overall Risk</h3>
              <div className="overall-Risk">
                {80 < 50 ? (
                  <p className="High">Site Completely Down...!</p>
                ) : (
                  <p className="good">Good</p>
                )}
              </div>
            </span>
          </div>

          <a className="knowMore" href="/">
            Genrate Report <IoIosLink />
          </a>
        </div>
        {/*End of POPUP */}
      </div>
    </>
  );
}
export default HeroBG;
