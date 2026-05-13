import React, { useState } from "react";
import "../Common.css";

function Math() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">BPIE</h1>

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
             
             <marquee className="mid_syllabus">Mid sem 1 : unit 1 and unit 2</marquee> 
Module-I
<br/> 
Engineering Materials: Metallic and non-metallic materials. Mechanical properties: strength, hardness, toughness, 
brittleness, creep, fatigue, stiffness, ductility, malleability, elasticity and plasticity. Physical properties: density, 
viscosity, porosity, specific gravity, fusibility. Thermal properties: specific heat, thermal conductivity, thermal 
resistance, and thermal diffusivity. Magnetic properties, Electrical Properties: Resistance, Resistivity, conductance and 
conductivity, capacitance. Chemical properties: Corrosion resistance, acidity and alkalinity. Manufacturability, 
castability, machinability, weldability, ferrous and Non-ferrous metals, Alloying and its effects.
<br/><br/>
Module -II
Classification and principles of manufacturing processes: Manufacturing definition and its history, broad 
classification of manufacturing processes and their basic principles; casting and moulding, metal forming, material 
removal process, welding and joining, powder metallurgy and additive manufacturing. Manufacturing process flow in 
an industry with case studies; Application of manufacturing process in various industries;
<br/><br/>
Module -III 
Machining and Machine tools: Basics of machine tools, classification and kinematics of machine tool drives, 
classification cutting tools, tool materials, General purpose machine tools and applications: Lathe, Milling, Shaper, 
Planner, Drilling, Grinding, Punching. Special purpose machine tools and applications: capstan and turret lathe, gear 
hobbing machine, Computer control in machine tool, CNC.
<br/><br/>
Module -IV 
Advanced and Digital Manufacturing: Advanced manufacturing processes; Precision and micro-to-nano 
manufacturing; Reverse engineering and rapid prototyping; Additive manufacturing processes; IoT and Industrial IoT; 
Introduction to Industry 4.0 and beyond.
<br/><br/>
Module -V 
Introduction to Industrial Engineering: Production Planning, Scheduling, Inventory Management System, Lean 
Manufacturing Concept, Facility Layout & Design, Logistics and Supply Chain Management, Equipment Maintenance, 
Industrial Safety.
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
              // target="_blank"
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
              // target="_blank"
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
              // target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              Click Here
            </a>
          </div>


        </div>
      </div>

      {/* NOTES */}

      {/* <div className="section">
        <h2>Student Notes</h2>
        <div className="horizontal-container">

        <div className="file-box">
          <h3>Unit 1(student Name)</h3>
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
          <h3>Unit 2,3(student Name)</h3>
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
          <h3>Unit 1(student Name)</h3>
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
        
      </div> */}

     <div className="section">
        <h2>Faculty's Materials</h2>
        <div className="horizontal-container">

        <div className="file-box">
          <h3>Unit 1 (Not Provided)</h3>
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
          <h3>Unit 2(Not Provided)</h3>
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
          <h3>Unit 4(Not Provided)</h3>
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
              href="https://drive.google.com/file/d/1NtpVDXHBv77Ok4K2EphU75Pk0NdeAKKs/view?usp=drivesdk"
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
              href="https://drive.google.com/file/d/1iVFtFpC90Uvzxty_SeHmXJ3cfxgVVZc3/view?usp=drivesdk"
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
            Unit 1 <br/>
            
          </a>
          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Unit 1
          </a>

          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Unit 1
          </a>
          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Unit 2
          </a>

          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Unit 2
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Math;