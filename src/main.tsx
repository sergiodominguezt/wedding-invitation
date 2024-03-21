import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Banner from "./components/banner/Banner.tsx";
import Countdown from "./components/countdown/Countdown.tsx";
import OurStory from "./components/story/OurStory.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselPhotos from "./components/carousel/CarouselPhotos.tsx";
import WeddingDetails from "./components/weddingdetails/WeddingDetails.tsx";
import WeddingRules from "./components/weddingrules/WeddingRules.tsx";
import Gifts from "./components/gifts/Gifts.tsx";
import Dresscode from "./components/dresscode/Dresscode.tsx";
import Audio from "./components/audio/MusicPlayer.tsx";
import Share from "./components/share/Share.tsx";
import Confirm from "./components/confirm/Confirm.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Banner />
    <Audio />
    <Countdown />
    <OurStory />
    <CarouselPhotos />
    <WeddingDetails />
    <Dresscode />
    <WeddingRules />
    <Gifts />
    <Share />
    <Confirm />
  </React.StrictMode>
);
