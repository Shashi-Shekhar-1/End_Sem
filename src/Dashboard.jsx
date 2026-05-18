
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS_folder/Dashboard.css";
import logo from "./Photo/logo.png";
import physics from "./Photo/physics.jpeg";
import beee from "./Photo/beee.jpeg";
import chemistry from "./Photo/chemistry.jpeg";
import edcg from "./Photo/edcg.jpeg";
import math from "./Photo/math.jpeg";
import pps from "./Photo/pps.jpg";
import iks from "./Photo/iks.jpg";




function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    { id: 2, img: math, path: "/Beee",subject: "E_Maths II" },
    { id: 1, img: physics, path: "/Mechanics",subject: "E_Physics" },
    { id: 3, img: chemistry, path: "/Chemistry",subject: "E_Biology" },
    { id: 4, img: beee, path: "/Maths",subject: "BPIE"},
    { id: 5, img: edcg, path: "/Edcg",subject: "MATE" },

    { id: 6, img: pps, path: "/Pps",subject: "PPS" },
    { id: 7, img: iks, path: "/Iks",subject: "IKS" },
    
  ];

  return (
    
    <div className="dashboard">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onClick={() => navigate(card.path)}
        >
          <img src={card.img} alt={`Card ${card.id}`} />
           <p className="card-title">{card.subject}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;