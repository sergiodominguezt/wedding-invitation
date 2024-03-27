import "./weddingrules.css";
import { CgCross } from "react-icons/cg";

function WeddingRules() {
  return (
    <div className="wedding-rules-container">
      <div className="wedding-rules-title">
        <h1>Reglas de la boda</h1>
      </div>
      <div className="wedding-rules-list">
        <p>
          <CgCross /> Esta boda la disfrutamos los adultos, los niños descansan
          en casa.
        </p>
        <p>
          <CgCross /> ¡Prepárense para una boda llena de colores!. Evita los
          colores blanco (mujeres), crema, azul o derivados en tu outfit.
        </p>
        <p>
          <CgCross /> No olvides llevar tu cambio de zapatos a tenis, queremos
          que disfrutes nuestra boda al máximo y sobretodo, que estés cómodo/a.
        </p>
      </div>
    </div>
  );
}

export default WeddingRules;
