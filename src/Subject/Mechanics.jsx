import React, { useState } from "react";
import "../Mechanics.css";

function Mechanics() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">Engineering Mechanics</h1>

      <div className="whatsapp-container">
        {/* Floating WhatsApp Button */}

        <a
          href="https://wa.me/919142060041"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
          <span className="whatsapp-text">Any Query?</span>
        </a>
      </div>

      {/* SYLLABUS */}
      <div className="section">
        <button
          className="toggle-btn"
          onClick={() => setShowSyllabus(!showSyllabus)}
        >
          {showSyllabus ? "Hide Syllabus" : "View Syllabus"}
        </button>

        {showSyllabus && (
          <div className="file-placeholder">
             Unit 1 
Force system: Forces, Free-Body Diagrams, Moment, Couples, Resultant and Equilibrium of Two dimensional force 
System, Equivalent Force system
<br/><br/>
Unit 2 
Structures in Equilibrium: Beams and Trusses, Dry Friction for inclined planes, Belt friction 
<br/><br/>
Unit 3 
Motion of a Point: Position, Velocity and Acceleration, Straight Line motion, Curvilinear Motion, Cartesian 
coordinates, normal & tangential coordinates and, polar coordinates. Relative motion 
<br/><br/>
Unit 4 
Forces, Mass and Acceleration: Newton’s second law, Work-Energy Principle, Impulse- Momentum Principle, Direct 
central impact
          </div>
        )}
      </div>

      {/* ASSIGNMENTS */}
      <div className="section">
        <h2>Assignments  (With Solution)</h2>

        <div className="horizontal-container">

          <div className="file-box">
            <h3>Assignment 1<br/>Unit(1,2)-20 Q</h3>
            <a
              href="https://drive.google.com/file/d/1iVFtFpC90Uvzxty_SeHmXJ3cfxgVVZc3/view?usp=drivesdk"
              // target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Click Here
            </a>
          </div>

          <div className="file-box">
            <h3>Assignment 2<br/>Unit(3,4)-16 Q</h3>
            <a
              href="PASTE_PDF_LINK_HERE"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Click Here
            </a>
          </div>

          <div className="file-box">
            <h3>Assignment 2<br/>Unit(5)-34 Q</h3>
            <a
              href="PASTE_PDF_LINK_HERE"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Click Here
            </a>
          </div>


        </div>
      </div>

      {/* NOTES */}
      <div className="section">
        <h2>Student Notes</h2>
        <div className="horizontal-container">

        <div className="file-box">
          <h3>Unit 1(By student name)</h3>
          <a
            href="https://drive.google.com/file/d/1iVFtFpC90Uvzxty_SeHmXJ3cfxgVVZc3/view?usp=drivesdk"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          
        </div>

        <div className="file-box">
          <h3>Unit 2,3(By xyz)</h3>
          <a
            href="PASTE_PDF_LINK_HERE"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          
        </div>

        <div className="file-box">
          <h3>Unit 1(By abc)</h3>
          <a
            href="PASTE_PDF_LINK_HERE"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          
        </div>

        <div className="file-box">
          <h3>Unit 4(student Name)</h3>
          <a
            href="PASTE_PDF_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          </div>
          </div>
        
      </div>

      {/* PYQ */}
      <div className="section">
        <h2>Previous Year Questions (PYQ)</h2>

        <div className="horizontal-container">

          <div className="file-box">
            <h3>PYQ 2025(Mid sem)</h3>
            <a
              href="PASTE_PDF_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Open 2025
            </a>
          </div>

          <div className="file-box">
            <h3>PYQ 2024</h3>
            <a
              href="PASTE_PDF_LINK_HERE"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Open 2024
            </a>
          </div>

          <div className="file-box">
            <h3>PYQ 2023</h3>
            <a
              href="PASTE_PDF_LINK_HERE"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Open 2023
            </a>
          </div>

          <div className="file-box">
            <h3>PYQ 2022</h3>
            <a
              href="PASTE_PDF_LINK_HERE"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Open 2022
            </a>
          </div>

          

        </div>
      </div>

      {/* YOUTUBE */}
      <div className="section">
        <h2><u>Recommended YouTube Channel(Link)</u></h2>

        <div className="youtube-box">
          <a
            href="https://youtube.com/playlist?list=PLDN15nk5uLiAyM7MbRBF1eIFC8y5vMRxI&si=PeMZjm1f0ox5FI5E"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            TIKLE'S ACADEMY <br/>
            
          </a>
          <a
            href="https://youtube.com/playlist?list=PLT3bOBUU3L9hADhGPsZjSddwAC3BvJDnl&si=nm86THm_NOJ4TafJ"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Pradeep Giri
          </a>

          <a
            href="https://youtube.com/playlist?list=PLjtQ3BMex7huPZ48zpcyxqvCjEqz6EKru&si=8I-HQbFSx0h9LY8n"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            P W
          </a>
          

          <a
            href="https://youtu.be/axCslafAj3s?si=eKHSvB-DN6yTbSqV"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Gatway Classes
          </a>
          <a
            href="https://www.youtube.com/live/WSctd-KdTIk?si=sucypq6Gh5814miX"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Uncademy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mechanics;