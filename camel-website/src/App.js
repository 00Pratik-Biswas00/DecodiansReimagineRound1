import React, { useState, useEffect } from "react";
import ParticlesComponent from "./components/ParticlesComponent";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FullSlider from "./components/FullSlider";
import Poster from "./components/Poster";
import FeaturedArtist from "./components/FeaturedArtist";
import TransparentPhotoColors from "./components/TransparentPhotoColors";
import Writeup from "./components/Writeup";
import Wonderland from "./components/Wonderland";
import KidsCards from "./components/KidsCards";
import ExploreArtistsGallery from "./components/ExploreArtistsGallery";
import Quotation from "./components/Quotation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import ThemeSettings from "./components/ThemeSettings";
import "./App.css";

function App() {
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      document.documentElement.className = currentThemeColor; // Apply the theme class to the html element
    }
  }, []);

  return (
    <div className="content-box">
      <ParticlesComponent />
      <Nav />
      <Header />
      <Banner /> {/* issue in small screen */}
      <FullSlider />
      <Poster />
      <FeaturedArtist />
      <TransparentPhotoColors />
      <Writeup />
      <Wonderland />
      <KidsCards /> {/* issue in small screen */}
      <ExploreArtistsGallery />
      <Quotation />
      {/* <ExtraContents /> */}
      <FAQ />
      <GoToTop />
      <ThemeSettings />
      <Footer />
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
