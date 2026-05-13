import React, { useState } from "react";
import "../Common.css";

function Iks() {
  const [showSyllabus, setShowSyllabus] = useState(false);

  return (
    <div className="mechanics-container">


      <h1 className="title">IKS</h1>

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
Basics of Ancient
Indian Knowledge and
Diverse Fields from
Health (Yoga),
Agriculture, Performing 
Arts etc.
: Yoga - Patanjali and Panini, Yoga Sutras & Mahabhashya, Yoga from Ancient Rishis, 
Munies, Sages and Seers, Different types of Yogas, Asanas & Pranayamas, Vagbhata 
Samhita for Health Benefits. 
Agriculture - Ancient Agricultural Trends, Practices & means of Transportation in 
Agriculture. 
Performing Arts – Different types of Ancient Arts, i.e; Murtikala, Embossing in Jewellery, 
Different School of Arts in Ancient India : Mathura, Gandhara and Amravati School, 
Pottery & Utensil making from Mud. 
<br/><br/>
Unit 2 
Ancient Indian
Knowledge in Various
Science Streams like
Physics, Chemistry,
Biology, Forestry, 
Mathematics etc.
: Gravitational Laws, Concept of Pendulum, Ancient knowledge of Space & Astronomy 
related to Outer Space and different Celestial Bodies, i.e; Planetary System, Stars and their 
Movement.
Chemistry – Ancient Knowledge of Rasayanas, Preservative Methods using Oil and Salt 
etc.
Biology & Forestry – Rich Cultural Heritage of Ayurveda, Different types of Medicinal 
uses of Plants, Fauna, Flora. Study of Animal and Plant Fossils, Interaction/ Inter-relation 
of Mankind and Nature on Mutually Beneficial Basis. Traditional methods for 
conservation of Forests, Trees and Preventing Soil Erosion.
Mathematics – Present Day Decimal System traces its History to Ancient India, Giving 
the concept of Zero as a number to the World, Negative Numbers, basic Arithmetic and 
Algebraic concept, Knowledge of Advance Trigonometry in Ancient India.
<br/><br/>
Unit 3 
Ancient Indian
Knowledge in Civil
Engineering, Metallurgy,
Mechanical Sciences,
Textile Technology etc
: Civil Engineering Concept and Familiarity with Sthapaty Kala, the Art of Construction in 
Ancient India, Civil Engineering Knowledge in Architecture in Making a Well Planned 
City by the Harappan Civilization Remains Undisputed. World Heritage Sites of Ajanta, 
Ellora, Khajuraho, Sanchi, Mahabalipuram are the Testaments of Excellent Civil 
Engineering Craftsmanship and Architecture, Well Developed Architecture During 
Cholas, Pal Dynasty is Evident in Various Ancient Temples in Present India. Concept of 
Canals and Wells for Irrigation & Human Needs in Ancient India is Well Documented
Metallurgy – Concept Well Mentioned in Vedic Age Texts Using the Term Ayas for 
Metals, Minting/ Metal Casting Of Gold, Silver, Bronze, Copper for Utensils and 
Jewellery During Ancient India.
Mechanical Sciences – Agriculture and Military Equipments like Hammer, Tongs, Idea of 
Basic Mechanical Concept for Transportation Using Bullock-Carts, Handpulled Carts 
Using Wheels, Chariots, Boats Using Patwar (Rudder) During Vedic Age ss Well Known, 
Use of Ploughing Tools Made of Metals and Wood etc.
Textile Technology – Archaeological Evidence of Cotton Textile at Mohenjo Daro in the 
Indus Valley, Use of Charkhas and Traditional Yarns like Khadi, Silk Fabric from Silk 
Worm and export of quality Silk to West and European Countries is well established.
<br/><br/>
Unit 4 
Ancient Indian
Knowledge in Electrical,
Electronics,
Computational Studies,
Instrumentation etc.
: Ancient India Knowledge in Generation of Electricity from Water, Silk and Clouds, 
Agastya Samhita Speaks about Electroplating, Basic knowledge of Computations and 
Instrumentation during Vedic Period, Musical Instruments like Seven-Holed Flute and 
other Stringed Instruments like Ravanahatha, Cymbals, Dhol (Drum) found by 
Archaeologists from Indus Valley Civilization Sites.
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
            IKS Unit 1 <br/>
            
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

export default Iks;