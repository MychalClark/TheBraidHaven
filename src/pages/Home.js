import React, { Component } from "react";
import SliderBar from "../components/SliderBar";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <div className="home">
      <SliderBar />
      <SliderBar />
      <SliderBar />
    </div>
  );
}

export default Home;
