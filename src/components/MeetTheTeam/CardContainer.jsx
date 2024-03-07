import React from "react";
import Card from "./Card";
import "./MeetTheTeam.css";

const CardContainer = (props) => (
  <div className="cards-container">
    {props.cards.map((card) => (
      <Card title={card.title} content={card.content} imgUrl={card.imgUrl} />
    ))}
  </div>
);

export default CardContainer;
