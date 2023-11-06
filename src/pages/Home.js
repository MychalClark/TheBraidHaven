import React, { Component } from "react";
import SliderBar from "../components/SliderBar";
import { Container } from "react-bootstrap";
import TabComponent from "../components/TabComponent";
import HeroComponent from "../components/HeroComponent";
import BoxLinkComponent from "../components/BoxLinkComponent";
import "../index.css";
import HomeGalleryComponent from "../components/HomeGalleryComponent";

function Home() {
  const boxBraidItem = {
    title: "Box Braids",
    description:
      "box braids go brrr box braids go brrr box braids go brrrvbox braids go brrr",
    img: "../images/girl1.png",
    price: "$150",
    discountedFrom: "$190",
  };
  const boxBraidItems = {
    title: "Box Braids",
    description: "box braids go brrr",
    img: "../images/girl1.png",
    price: "$150",
    discountedFrom: "$190",
  };

  const items = [boxBraidItem, boxBraidItems];
  const linkItem = { title: "Eyelashes", img: "../images/girl2.png" };

  const links = [linkItem, linkItem, linkItem, linkItem];

  return (
    <div className="home">
      <HeroComponent heroImg={"/images/girl2.png"} />

      <BoxLinkComponent links={links} />

      <TabComponent items={items} />

      <HomeGalleryComponent />
    </div>
  );
}

export default Home;
