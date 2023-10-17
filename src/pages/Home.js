import React, { Component } from "react";
import SliderBar from "../components/SliderBar";
import { Container } from "react-bootstrap";
import "../index.css";
function Home() {
  return (
    <div className="home">
      <SliderBar
        backgroundColor="backgroundColor1"
        title="Schedule!"
        desc="Find openings, get yer hair done."
        img="/images/girl_thumbnail.png"
      />
      <SliderBar
        backgroundColor="backgroundColor4"
        title="DEALS"
        desc="New Deals. Shop fast or dont."
        img="/images/girl1.png"
      />
      <SliderBar
        backgroundColor="backgroundColor6"
        title="Gallery"
        desc="Find the hair thats right for you or sumn."
        img="/images/girl_thumbnail.png"
      />
    </div>
  );
}

export default Home;
