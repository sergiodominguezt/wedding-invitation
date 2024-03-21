import React from "react";
import "./weddingdetails.css";
import chapel from "../../assets/churchedited.png";
import cheers from "../../assets/cheerseditedfinal.png";
import { SiGooglemaps } from "react-icons/si";
import { FaWaze } from "react-icons/fa";

export default function WeddingDetails() {
  return (
    <div className="wedding-details-container">
      <div className="wedding-details-title">
        <h1>Detalles de la boda</h1>
      </div>
      <div className="ceremony">
        <h2>Ceremonia</h2>
        <div className="ceremony-content">
          <div className="ceremony-text">
            <p className="ceremony-hour">04:00 p.m.</p>
            <p className="ceremony-place">Capilla Nuestra Señora del Carmen</p>
            <p>Ruitoque Bajo, Santander</p>
          </div>
          <div className="ceremony-image">
            <img src={chapel} alt="Church" />
          </div>
        </div>
        <div className="ceremony-button">
          <a href="https://maps.app.goo.gl/ju4BkUpfE7VqVaGt5" target="_blank">
            <button className="button">
              <SiGooglemaps /> Como llegar
            </button>
          </a>

          <a href="https://waze.com/ul/hd3k0017y0" target="_blank">
            <button className="button">
              <FaWaze /> Como llegar
            </button>
          </a>
        </div>
      </div>

      <div className="reception">
        <h2>Recepción</h2>
        <div className="reception-content">
          <div className="reception-text">
            <p>Parcela La Alborada Eventos Luzma</p>
            <p>Ruitoque Bajo</p>
          </div>
          <div className="reception-image">
            <img src={cheers} alt="Celebracion" />
          </div>
        </div>
        <div className="reception-button">
          <a
            href="https://www.google.com/maps/place/Parcela+la+alborada+EVENTOS+LUZMA+3167176976/@7.0353243,-73.120406,15z/data=!4m6!3m5!1s0x8e683993635db753:0x28b4ec22be165dd3!8m2!3d7.0353243!4d-73.120406!16s%2Fg%2F11g1lgz6s5?entry=ttu"
            target="_blank"
          >
            <button className="button">
              <SiGooglemaps /> Como llegar
            </button>
          </a>

          <a
            href="https://www.waze.com/es/live-map/directions/co/santander/bucaramanga/parcela-la-alborada-eventos-luzma-3167176976?to=place.ChIJU7ddY5M5aI4R010WviLstCg"
            target="_blank"
          >
            <button className="button">
              <FaWaze /> Como llegar
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
