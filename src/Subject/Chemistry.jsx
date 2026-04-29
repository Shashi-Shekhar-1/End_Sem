import React, { useState } from "react";
import "../Common.css";

function Chemistry() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">Engineering Biology</h1>

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
Crosstalk between Biology and Engineering:
a) Biologically inspired technologies: Case studies of designs in nature and inspired technologies, Biomemetics: 
Nature inspired material and mechanisms, Self-cleaning surfaces; Self-healing Bioconcrete, Biomining,
Algorithms in nature,
b) Contribution of engineering in biological domain: Contribution of Microscope, Imaging techniques, Bio-medical 
Instruments, Mechanisms (Ergonomics)
<br/><br/>
Unit 2
<br/> 
Organization of Living Machines:
Biomolecules and manufacturing of Biopolymers:
• Carbohydrates (structure-based function and engineering applications)
• Lipids (structure-based function and engineering applications)
• Proteins (structure-based function and engineering applications)
• Nucleic Acids (structure-based function and engineering applications) 
Organization of life forms: Cell to organism
 Bioenergetics- Energy dynamics in biological system- principles of energy conservation and optimization
 <br/><br/>
Unit 3 
<br/>
Analogy of biological organ/system and engineering Device/Mechanism:
Organ & system: Brain & CPU, Eye & Camera, Kidney & Filtration system, Lungs & purification system,
Heart & Pumping system Process: Photosynthesis & solar cells, Xylem & plumbing, Thermoregulation in human
body & heat transfer in machine, Defense mechanism in organism, signaling processing in biology and
electronics
<br/><br/>
Unit 4 
<br/>
Concepts in Bioengineering:
Biomechanics: Mechanical properties of tissues, Prosthesis and rehabilitation
Bioprinting: 3D printing of biological tissues and organ engineering and transplanting
Biomaterials: Types, properties and applications
Tissue Engineering: Principle, Components, Methods of Scafold synthesis, properties and applications.
<br/><br/>
Unit 5 
<br/>
Application areas of Bioengineering:
Databases & Biocomputing: Acquisition, storage, processing and transmission of biological data and its
applications like PCR
Bioinstrumentation: Diagnostic and Therapeutic devices
Bioimaging: Principle, types and examples
Biosensors: Principle, types and examples
Computational biology and application of Artificial Intelligence in bio-medical field
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
          <h3>Unit 1(Facuty Name)</h3>
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
          <h3>Unit 2,3(Faculty  Name)</h3>
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

export default Chemistry;