import React from "react";
import Hero from "../components/Hero";
import TentangKami from "../components/TentangKami";
import LayananUnggulan from "../components/LayananUnggulan";
import ArtikelTerbaru from "../components/ArtikelTerbaru";
import SocialMediaVideosSection from "../components/VideoSection";
import PatientTestimonialSection from "../components/TestimoniPasien";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LayananUnggulan />
      <TentangKami />
      <ArtikelTerbaru />
      <PatientTestimonialSection />
      <SocialMediaVideosSection />
    </div>
  );
};

export default HomePage;
