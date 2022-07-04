import React from "react";
import BeforeAfterHome from "../../Components/Home/BeforeAfter/BeforeAfterHome";
import Hero from "../../Components/Home/Hero/Hero";
import HomeAbout from "../../Components/Home/HomeAbout/HomeAbout";
import AllItem from "../../Components/Home/HomeAppoinment/AllItem/AllItem";
import HomeBlog from "../../Components/Home/HomeBlog/HomeBlog";
import HomeCommentsAndSocial from "../../Components/Home/HomeCommentsAndSocial/HomeCommentsAndSocial/HomeCommentsAndSocial";
import HomeDoctor from "../../Components/Home/HomeDoctor/HomeDoctor";
import HomeServices from "../../Components/Home/HomeServices/HomeServices";


export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeBlog />
      <AllItem />
      <BeforeAfterHome />
      <HomeDoctor />
      <HomeCommentsAndSocial />
    </>
  );
}
