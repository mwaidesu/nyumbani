import React from "react";
import "./Cards.css";
import { cardsData } from "../../../Data/Data";
import { MdPeople } from "react-icons/md";

import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {/* {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })} */}
      <div className="card">
        <div>
          <h2>20</h2>
          <h4>Orders</h4>
        </div>
        <div>
          <MdPeople size={40} />
        </div>
      </div>
      <div className="card">
        <div>
          <h2>15</h2>
          <h4>Clients</h4>
        </div>
        <div>
          <MdPeople size={40} />
        </div>
      </div>
      <div className="card">
        <div>
          <h2>5</h2>
          <h4>Movers</h4>
        </div>
        <div>
          <MdPeople size={40} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
