import React from "react";
import Hero from "../components/Hero";
import TentangKami from "../components/TentangKami";
import LayananUnggulan from "../components/LayananUnggulan";
import ArtikelTerbaru from "../components/ArtikelTerbaru";
import VideoSection from "../components/VideoSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LayananUnggulan />
      <TentangKami />
      <ArtikelTerbaru />
      <VideoSection />
    </div>
  );
};

export default HomePage;
