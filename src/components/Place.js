import React from "react";
import { Link } from "react-router-dom";
import ".././routes/Home.css";
import img1 from "../assets/01.jpg";
import { useState } from "react";
import PopUp from "./PopUp";

const Place = ({ id, name, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const openPopUp = () => {
    setIsHovered((isHovered) => true)
 
  };
  const closePopUp = () => {
    setIsHovered((isHovered) => false);
  
  };

  return (
    <div className="result" onMouseEnter={openPopUp} onMouseLeave={closePopUp}>
      <PopUp
        trigger={isHovered}
        text="As collected deficient objection by it disco very sincerity curiosity.
          Quiet decay who round three world whole has mrs man. Built the china
          there tried jokes which gay why. Assure in adieus wicket it is. But
          spoke round point and one joy. Offending her moonlight men sweetness
          see unwilling. Often of it tears whole oh balls share an."
      />
      <Link as="link" className="place" to={`/place/${id}`}>
        <h2 key={id}>{name}</h2>

        <img src={img1} alt="" />
        <h3></h3>
      </Link>
    </div>
  );
};

export default Place;
