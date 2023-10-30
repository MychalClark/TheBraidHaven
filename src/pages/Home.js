import React, { Component } from "react";
import SliderBar from "../components/SliderBar";
import { Container } from "react-bootstrap";
import TabComponent from "../components/TabComponent";
import HeroComponent from "../components/HeroComponent";
import BoxLinkComponent from "../components/BoxLinkComponent";
import "../index.css";
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
