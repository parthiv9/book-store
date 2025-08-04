import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import NewArrival from "../components/NewArrival";
import FeatureBooks from "../components/FeatureBooks";
import PopularBooks from "../components/PopularBooks";
import NewsLetter from "../components/NewsLetter";
import Achievements from "../components/Achievements";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <NewArrival />
      <FeatureBooks />
      <PopularBooks />
      <Achievements />
      <NewsLetter />
    </>
  );
};

export default Home;
