import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GiBathtub } from "react-icons/gi";
import { LuBedDouble } from "react-icons/lu";
import { LiaRulerHorizontalSolid } from "react-icons/lia";

const Cards = (props) => {
  console.log(props);
  
  return (
    <div className="mainContainer">
      <div className="top">
        <div className="img">
          <img src={props.image} alt="" />
        </div>
        <div className="parent">
          <div className="details">
            <div className="price">
              <h2>{props.price}</h2>
              <p>For sale</p>
            </div>
            <h3>{props.title}</h3>
            <p className="location">
              <CiLocationOn />
              {props.location}
            </p>
          </div>
          <hr />
          <div className="size">
            <div className="sqft">
              <LiaRulerHorizontalSolid />
              <h3>
                <span>{props.sqft}</span>sqft
              </h3>
            </div>
            <div className="beds">
              <LuBedDouble />
              <h3>
                <span>{props.beds}</span>Beds
              </h3>
            </div>
            <div className="bath">
              <GiBathtub />
              <h3>
                <span>{props.bath}</span>Bath
              </h3>
            </div>
          </div>
          <hr />

          <div className="contact">
            <img src={props.agent_img} alt="" />
            <div className="contact-details">
              <h3>{props.agent_name}</h3>
              <h4>{props.agent_phoneNO}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
