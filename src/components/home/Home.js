import React from "react";
import Footer from "../footer/Footer";
import Card from "./Card";
import Switch from "./switchingComponents/Switch";

const Home = () => {
  return (
    <div>
      <div className="bg-amber-100 py-4">
      <img
        className="homeImage mx-auto "
        src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Homepage pic"
      />
      <div class="centered text-white">
        <h1 className="text-7xl">Utahama Lini?</h1>
        <p className="text-xl">"We like to move it, move it. Let us help you move it, move it."</p>
        <span> - NyumbaniMove™</span>

      </div>
      </div>

      {/* //moving component/////////////////////// */}

      <div className="">
        <Switch/>
      </div>

      <div className="text-center py-9 my-9">
        <h2 className="font-bold">Our Moving Services</h2>
        <h4 className="py-4">
          {" "}
          We believe in providing flexible moving services to make getting to
          your next stop in life much easier.{" "}
        </h4>
      </div>

      <div className="bg-amber-100 py-4">
      <div className = "cards flex justify-between">
      <Card

          img="https://www.svgrepo.com/show/25233/delivery-truck.svg"
          title="Local Moves"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />

        <Card
          img="https://www.nicepng.com/png/detail/763-7631323_earth-icon-blue.png"
          title="International Moves"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        />

        <Card
          img="https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-22-512.png"
          title="Office Moves"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </div>

      <div className = "cards flex justify-between mt-5">
      <Card

          img="https://png.pngtree.com/png-vector/20191128/ourmid/pngtree-coin-money-icon-png-image_2049478.jpg"
          title="Favorable Prices"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />

        <Card
          img="https://media.istockphoto.com/vectors/hand-pointer-or-cursor-mouse-clicking-on-book-online-button-linear-vector-id1319058954?k=20&m=1319058954&s=612x612&w=0&h=qXOYOr29EuZvzXNh6KLjtPg8UP4MybqNmuYt1SrUkrg="
          title="Fast Booking"
          description= "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        />

        <Card
          img="https://us.123rf.com/450wm/arcady31/arcady312008/arcady31200800067/154583005-save-date-in-calendar-vector-icon-isolated-on-white-background.jpg?ver=6"
          title="Flexible Schedules"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </div>
      </div>

      <Footer/>



     


    </div>
  );
};

export default Home;
