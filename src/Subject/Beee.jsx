import React, { useState } from "react";
import "../Common.css";

function MathsII() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">E_Maths II</h1>

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
            <br />
            Ordinary Differential Equations:
            First order Ordinary Differential Equations: Homogeneous, Linear, Exact ; Higher order linear equations with constant
            coefficients, Euler-Cauchy equations, Non homogeneous higher order linear differential equations with constant
            coefficients (method of undetermined coefficients and method of variation of parameters), Applications to Initial and
            boundary value problems: Orthogonal Trajectories, Statement and Application of Newton’s Law of Cooling, Growth
            and Decay, Kirchhoff’s Law, Simple Electrical Circuits, Heat Flow, Rectilinear Motion, Simple Harmonic Motion.
            S: First order Ordinary Differential Equations - Variable Separable, Homogeneous, Linear
            <br /><br />
            Unit 2
            <br />
            Partial Differential Equations:
            Fourier Series, Dirichlet’s condition, Half range series, Formulation of Partial differential equation, Solution of First
            order partial differential equations, Quasi-linear differential equations, Second order differential equations and canonical
            form. Initial and Boundary value problem, Method of separation of variable, Dirichlet’s problem, Poisson's Equation,
            Vibrations of a String, One dimensional heat equation, Two- dimensional heat equation (Laplace Equation) under steady
            state conditions.
            S: two-dimensional heat equation (Laplace Equation) under steady state conditions
            <br /><br />
            Unit 3
            <br />
            Probability:
            Random variables, Probability distributions, Expectation and variance, Moment Generating Function, Binomial
            distribution, Poisson distribution, Normal distribution and Exponential distribution.
            S: Basic concept of Probability, Conditional Probability, Exponential distribution
          </div>
        )}
      </div>

      {/* ASSIGNMENTS */}
      <div className="section">
        <h2>Assignments  (With Solution)</h2>

        <div className="horizontal-container">

          <div className="file-box">
            <h3>Assignment 1<br />Unit(1,2)-20 Q</h3>
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
            <h3>Assignment 2<br />Unit(3,4)-16 Q</h3>
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
            <h3>Assignment 2<br />Unit(5)-34 Q</h3>
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
            <h3>Unit 1(Faculty  Name)</h3>
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
            <h3>Unit 2,3(Faculty Name)</h3>
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
            <h3>Unit 1(Faculty  Name)</h3>
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
            href="https://youtu.be/ZHHvqtWBtnU?si=w5ecDjCtfz_8664s"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Fearless Innocent Math(unit 1) <br />

          </a>
          <a
            href="https://www.youtube.com/live/RrZ4sH1gWos?si=toIx7B_yu_cJwkyf"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Gateway Classes(unit 1)
          </a>

          <a
            href="PASTE_YOUTUBE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-link"
          >
            Dummy
          </a>
          <a
            href="PASTE_YOUTUBE_LINK_HERE"
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

export default MathsII;