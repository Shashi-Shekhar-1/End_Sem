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

<marquee className="mid_syllabus">Mid sem 1 : unit 1 and unit 4</marquee>            
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
            <h3>Assignment 1<br/>Not available</h3>
            <a
              href="https://drive.google.com/file/d/1Mk5oB187zw_LDoSwLvXezNrD9qzugoQ5/view?usp=drivesdk"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Click Here
            </a>
          </div>

          <div className="file-box">
            <h3>Assignment 2<br/>Not avaiable</h3>
            <a
              href="https://drive.google.com/file/d/1Mk5oB187zw_LDoSwLvXezNrD9qzugoQ5/view?usp=drivesdk"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Click Here
            </a>
          </div>

          <div className="file-box">
            <h3>Assignment 2<br/>Not available</h3>
            <a
              href="https://drive.google.com/file/d/1Mk5oB187zw_LDoSwLvXezNrD9qzugoQ5/view?usp=drivesdk"
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
          <h3>Unit 1(Wave Function)</h3>
          <a
            href="https://drive.google.com/file/d/1MRTm1YbbL3A_4dLRUAaczotwYJUeEruF/view?usp=drivesdk"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          
        </div>

        <div className="file-box">
          <h3>Unit 1(Dual Nature)</h3>
          <a
            href="https://drive.google.com/file/d/1MS9OClyF4SR-1RXcmalvZlRX6aatJRhi/view?usp=drivesdk"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          
        </div>

        <div className="file-box">
          <h3>Unit 1(particle in box)</h3>
          <a
            href="https://drive.google.com/file/d/1MVQLQ1m6xIvafN6SHqb78Elg-PKqlzeQ/view?usp=drivesdk"
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
              href="https://drive.google.com/file/d/1NQES9hQjFtdtp54UvPldTKe3C5oNgC0K/view?usp=drivesdk"
              // target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Open 2025
            </a>
          </div>

          <div className="file-box">
            <h3>PYQ 2024</h3>
            <a
              href="https://drive.google.com/file/d/1NRuWzpRmGT2d1nFZ5-jf5JbhBf3KMGzj/view?usp=drivesdk"
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
      </div>
      </div>

      {/* YOUTUBE */}
      <div className="section">
        <h2><u>Recommended YouTube Channel(Link)</u></h2>

        <div className="youtube-box">
          <a
            href="https://www.youtube.com/live/hQpugnbxH88?si=jTmv2SGieVOEWZpL"
            // target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Gateway Classes(unit1) <br/>
            
          </a>
          <a
            href="https://youtube.com/playlist?list=PLQzUXa8lZVq8Zciw0MsOdPJ1t-bpPKV6_&si=K0VBvkPdXuez8lH7"
            // target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            E-Phy. by Sanjiv(unit 1)
          </a>

          <a
            href="https://youtu.be/MDfXWIHQjMA?si=1fIoGSkvnA1dGTyh"
            // target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Gateway Classes(unit4)
          </a>
          
         <a
            href="https://youtube.com/playlist?list=PLSHVHUQ796408vH_LUwm7unewBwf_e196&si=CxAD0i6V6jJe9wiR"
            // target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            unit 4(FADU ENG.)
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mechanics;