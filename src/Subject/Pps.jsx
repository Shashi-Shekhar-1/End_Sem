import React, { useState } from "react";
import "../Common.css";

function Pps() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">PPS</h1>

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
            Unit 1
            <br/>
 Understanding a problem: Framing a problem in simple terms – mathematical, graphical, other abstractions. 
Number systems. Syntax errors and runtime errors. Algorithms, Properties/characteristics of Algorithms, Flowchart
and Pseudo code, Algorithmic representation of the programs.
Basic steps in program execution: Editing, compiling/interpreting/running programs, OS view and
programmer’s view.
<br/><br/>
Unit 2 
Basic Problems: Basic Data types (Numerical, String). Variables, Operators, Expressions, Statements, I/O 
statements for keyboard handling.
Conditional statements: Decision Making Statements (if-Statements, if-else Statements, Nested if Statements)
Iteration and Loops : use of While, do-While and FOR loops, multiple loop variables, use of break and continue 
statements.
<br/><br/>
Unit 3 
Array techniques: Arrays (1D and 2D), Array as homogenous collection of elements, Array representation in 
memory, Array properties, Reversing elements of an array.
Search problems: linear search, linear search in sorted array, binary search.
Sorting: Insertion, Bubble, Selection sorts
Unit 4 [6L]
Functions: Introduction to functions. Importance of design of functions. Functions (including using built-in 
libraries), Parameter passing in functions, call by value, call by reference. Passing arrays to functions.
Recursion : Recursive functions (Finding Factorial, Fibonacci series, Ackerman function, etc).
<br/><br/>
Unit 5 
Pointers : Idea of pointers, Defining pointers, Use of Pointers in Array.
Structure : Defining structures and Array of Structures
File Handling : Introduction to File Handling Some problems to read data from files.
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
              href="https://drive.google.com/file/d/1O2eNJCz0o4mG8trYrmR8HrkY3ePW9Et5/view?usp=drivesdk"
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
            Pps Unit 1 <br/>
            
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

export default Pps;