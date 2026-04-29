import React, { useState } from "react";
import "../Common.css";

function Edcg() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">Material Eng.</h1>

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
Introduction: Crystalline and Non crystalline solids. Classification of Engineering materials and their selections, 
bonding in Solids: Ionic, Covalent and Metallic bonding.
<br/><br/>
Unit 2
<br/>
Crystal Structure: Space lattices, Bravais lattices, Crystal system, Unit Cell, Metallic crystal structures: SC, 
BCC,FCC,HCP structures, Miller notations of planes and directions, Imperfections in crystals: Point defects, Line, 
surface defects, Dislocations: Edge and Screw dislocation, Burgers vectors.
<br/><br/>
Unit 3 
<br/>
Metallic Materials: Metals and alloys, ferrous materials- introduction to Iron -carbon Diagram, Steel and their Heat 
treatment, properties and applications. Different types of heat treatment processes. Non-ferrous alloys:Copper based 
alloys, Al based alloys, other important nonferrous alloys, properties and applications.
<br/><br/>
Unit 4 
<br/>
Polymers: Basic concepts of Polymer Science, polymer classifications, Crystallinity of polymers, Copolymers,
Thermoplastic and Thermosetting polymers, Elastomers, Properties and Applications.
<br/><br/>
Unit 5
<br/>
Ceramics-Basic concepts of ceramics science, traditional and new ceramics, Oxide and Non-Oxide ceramics, 
Ceramics for high temperature applications, Glass, applications of ceramics, and glass. Composite materials-
Definition, general characteristics, Particles reinforced and fiber reinforced composite materials, MMC, CMC, PMC, 
properties and applications.
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
              href="PASTE_PDF_LINK_HERE"
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
          <h3>Unit 1(faculty name)</h3>
          <a
            href="PASTE_PDF_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          
        </div>

        <div className="file-box">
          <h3>Unit 2,3(faculty Name)</h3>
          <a
            href="PASTE_PDF_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-link"
          >
            View Notes
          </a>
          
        </div>

        <div className="file-box">
          <h3>Unit 1(faculty Name)</h3>
          <a
            href="PASTE_PDF_LINK_HERE"
            target="_blank"
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
              target="_blank"
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
              target="_blank"
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
              target="_blank"
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
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Pradeep Giri <br/>
            
          </a>
          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            G Purohit
          </a>

          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            G Purohit
          </a>
          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            G Purohit
          </a>

          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            G Purohit
          </a>
          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Fearless Innocent
          </a>
        </div>
      </div>
    </div>
  );
}

export default Edcg;