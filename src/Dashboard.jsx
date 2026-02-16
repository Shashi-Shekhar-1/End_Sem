
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS_folder/Dashboard.css";
import logo from "./Photo/logo.png";
import mechanics from "./Photo/mechanics.jpeg";
import beee from "./Photo/beee.jpeg";
import chemistry from "./Photo/chemistry.jpeg";
import edcg from "./Photo/edcg.jpeg";
import math from "./Photo/math.jpeg";


function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    { id: 1, img: mechanics, path: "/Mechanics",subject: "E_Mechanics" },
    { id: 2, img: beee, path: "/Beee",subject: "BEEE" },
    { id: 3, img: chemistry, path: "/Chemistry",subject: "E_Chemistry" },
    { id: 4, img: math, path: "/Maths",subject: "E_Mathematics"},
    { id: 5, img: edcg, path: "/Edcg",subject: "EDCG" },
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