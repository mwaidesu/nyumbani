import React from "react";
import Footer from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import Cards from "./Cards";
import Switch from "./switchingComponents/Switch";

const Home = () => {
  return (
    <div>
      <Navbar/>
      
      <div className="bg-amber-100 pb-4">
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
        <h2 className="font-semibold text-3xl">Our Moving Services</h2>
        <h4 className="py-4 text-xl">
          We believe in providing flexible moving services to make getting to
          your next stop in life much easier.{" "}
        </h4>
      </div>

      <Cards/>
      <Footer/>
    </div>
  );
};

export default Home;
