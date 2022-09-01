import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div>
      <div className="mx-auto">
        <div className="cards flex flex-wrap justify-between">
          <Card
            img="https://www.svgrepo.com/show/25233/delivery-truck.svg"
            title="Local Moves"
            description="Moving from Mombasa to Kisumu or Garissa to Kahawa Sukari? Whatever distance you need to move, we will help you move. After all we like to move it move it."
          />

          <Card
            img="https://www.nicepng.com/png/detail/763-7631323_earth-icon-blue.png"
            title="International Moves"
            description="Our partners in other countries are always willing and available to help you move internationally and take care of your prized possesions on the long journey ahead. "
          />

          <Card
            img="https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-22-512.png"
            title="Office Moves"
            description="All moving companies we work with are well versed in helping samll and large companies relocate. Companies we have helped move before include Moringa School among others."
          />
        </div>

        
        <div className="cards flex flex-wrap justify-between">

          <Card
            img="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
            title="Favorable Prices"
            description="From bedsitters, studio apartments or two bedroom houses we offer prices that our competitors can't match. And discounts too, because we know moving is hard already."
          />

          <Card
            img="https://media.istockphoto.com/vectors/hand-pointer-or-cursor-mouse-clicking-on-book-online-button-linear-vector-id1319058954?k=20&m=1319058954&s=612x612&w=0&h=qXOYOr29EuZvzXNh6KLjtPg8UP4MybqNmuYt1SrUkrg="
            title="Fast Booking"
            description="From login to booking to moving in a matter of minutes if that's your wish. We do not want our customers to stress anymore since we know moving is stressful enough."
          />

          <Card
            img="https://us.123rf.com/450wm/arcady31/arcady312008/arcady31200800067/154583005-save-date-in-calendar-vector-icon-isolated-on-white-background.jpg?ver=6"
            title="Flexible Schedules"
            description="Choose whatever time you're comfortable moving and we will respect it. Our movers are on a 24hr call and ready to help you in an instant. Login, Book, Move. It's that easy."
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
