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

function Maths() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">

      <h1 className="title">Engineering Mathematics</h1>

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
            <br />
            Unit 2
            Structures in Equilibrium: Beams and Trusses, Dry Friction for inclined planes, Belt friction
            <br />
            Unit 3
            Motion of a Point: Position, Velocity and Acceleration, Straight Line motion, Curvilinear Motion, Cartesian
            coordinates, normal & tangential coordinates and, polar coordinates. Relative motion
            <br />
            Unit 4
            Forces, Mass and Acceleration: Newton’s second law, Work-Energy Principle, Impulse- Momentum Principle, Direct
            central impact
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

      <div className="footer">
        Narendra Pratap Sir
      </div>

    </div>
  );
}

export default Maths;