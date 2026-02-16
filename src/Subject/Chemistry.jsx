// function Chemistry(){
//   return(
//     <div>
//       Here, I will upload Syllabus,Assignment,Student Notes,PYQ,Recommended You Tube Channel
//     </div>
//   )
// };

// export default Chemistry;

// function Maths(){
//   return(
//     <div>
//       Here, I will upload Syllabus,Assignment,Student Notes,PYQ,Recommended You Tube Channel
//     </div>
//   )
// };

// export default Maths;




import React, { useState } from "react";

import "../Mechanics.css";

function Chemistry() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">

      <h1 className="title">Engineering Chemistry</h1>

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
Analytical Techniques for Engineers:
• Role of materials in engineering fields.
• Quality control and assurance in engineering contexts.
• Qualitative and quantitative analysis
• Emerging trends and applications of analytical techniques for engineering.
• Instrumental methods of analysis: spectroscopy (UV and IR), chromatography (GLC and HPLC), Thermo-
gravimetry: TGA
<br/>
<br/>

Unit 2 
Corrosion and material protection
• Introduction to corrosion and its impact on engineering materials
• Mechanism, Types/forms of corrosion, Factors that enhance corrosion and choice of parameters to mitigate 
corrosion.
• Corrosion prevention techniques, advanced surface coatings and corrosion inhibitors
• Case studies and real-world applications in corrosion prevention

<br/>
<br/>

Unit 3 
Electrochemical energy systems
• High energy electrochemical energy systems: Lithium-ion batteries principle, construction, working,
advantages and applications, Na-ion Battery, fiber battery
• Fuel cells-working principles, advantages, applications, discuss its emerging trends.
• Solar cells, Types Importance of silicon single crystal, polycrystalline and amorphous silicon solar cells-
working principles, characteristics and applications
• Green Chemistry & brief study of green hydrogen technology.
<br/>
<br/>
Unit 4 
Nanomaterials
• Nanomaterials, classification, Nanoscale phenomena and quantum effects
• Top-down and bottom –up approach, Synthesis methods: ball milling, RF sputtering, pulsed laser
deposition, thin film deposition
• Applications of nanomaterials in various fields.
• Fundamentals of Super capacitor and materials used in super capacitor, Synthesis of a super capacitor.
 Study of green nanotechnology, its application and synthesis
          </div>
        )}
      </div>

      {/* ASSIGNMENTS */}
      <div className="section">
        <h2>Assignments</h2>

        <div className="file-box">
          <h3>Assignment 1</h3>
          <div className="file-placeholder">
            Assignment file will appear here
          </div>
        </div>

        <div className="file-box">
          <h3>Assignment 2</h3>
          <div className="file-placeholder">
            Assignment file will appear here
          </div>
        </div>
      </div>

      {/* NOTES */}
      <div className="section">
        <h2>Student Notes</h2>

        <div className="file-box">
          <h3>Mechanics Notes</h3>
          <div className="file-placeholder">
            Notes will appear here
          </div>
        </div>
      </div>

      {/* PYQ */}
      <div className="section">
        <h2>Previous Year Questions (PYQ)</h2>

        <div className="file-box">
          <div className="file-placeholder">
            PYQ PDF will appear here
          </div>
        </div>
      </div>

      {/* YOUTUBE */}
      <div className="section">
        <h2>Recommended YouTube Channel</h2>

        <div className="youtube-box">
          {/* YouTube video will appear here */}

          <a href="www.youtube.com">Pradeep Giri</a>
          <a href="www.youtube.com">Gajendra Purohit</a>
          <a href="www.youtube.com">Fearless Innocent Math</a>


        </div>
      </div>
  </div>
  );
}

export default Chemistry;