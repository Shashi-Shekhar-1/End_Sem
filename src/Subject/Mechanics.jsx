import React, { useState } from "react";
import "../Common.css";

function Mechanics() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">Engineering Physics</h1>

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
<br/>
Quantum Mechanics: Matter waves, Properties of matter waves, Physical significance of wave function. 
Schrödinger’s time dependent and time independent equations, Operators, Eigen values and Eigen functions, 
Expectation values, Applications of Schrödinger’s equation; Motion of a free particle, Electron in an infinite 
deep potential well (rigid box), Electron in a finite deep potential well (non-rigid box) 
<br/><br/>
Unit 2 
<br/>
Solid State Physics: Lattice parameters, Miller indices, inter planer distance of lattice plane, density of crystals (linear, 
planar and volume), S𝑜̈mmerfield’s free electron theory, Density of states (3D), Fermi-Dirac probability function, 
Nearly free electron theory (E-k curve), classification of solids on the basis of band theory 
<br/><br/>
Unit 3
<br/>
Semiconductor Physics: Electron and hole concentrations in semiconductors, intrinsic density, intrinsic and 
Extrinsic conductivity, Position of Fermi level in intrinsic and extrinsic semiconductors, Law of mass action, 
Temperature variation of carrier concentration in extrinsic semiconductors, Electrical conduction in extrinsic 
semiconductor, Hall Effect
<br/><br/>
Unit 4 
<br/>
Laser Physics: Introduction to laser, Spontaneous and stimulated emission of radiations, Thermal equilibrium, 
Condition for Light amplification, Population inversion, Pumping (Three level and four level pumping), 
Optical resonator, Laser beam characteristics, Ruby laser, Nd-YAG Laser, He-Ne Laser, Semiconductor Laser, 
Engineering applications of Laser (Fiber optics, Laser material interaction)
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
        <h2>Faculty's Materials</h2>
        <div className="horizontal-container">

        <div className="file-box">
          <h3>Unit 1(By faculty name)</h3>
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
            href="https://www.youtube.com/live/hQpugnbxH88?si=jTmv2SGieVOEWZpL"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Gateway Classes(unit1) <br/>
            
          </a>
          <a
            href="https://youtube.com/playlist?list=PLQzUXa8lZVq8Zciw0MsOdPJ1t-bpPKV6_&si=K0VBvkPdXuez8lH7"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            E-Phy. by Sanjiv(unit 1)
          </a>

          <a
            href="https://youtube.com/playlist?list=PLjtQ3BMex7huPZ48zpcyxqvCjEqz6EKru&si=8I-HQbFSx0h9LY8n"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Dummy
          </a>
          
         <a
            href="https://www.youtube.com/live/WSctd-KdTIk?si=sucypq6Gh5814miX"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Dummy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mechanics;