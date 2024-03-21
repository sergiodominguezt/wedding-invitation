import dressCode from "../../assets/dresscode.png";
import "./dresscode.css";

function Dresscode() {
  return (
    //TODO agregar icono dress code

    <div className="dresscode-container">
      <h1>Código de vestimenta</h1>
      <img src={dressCode} alt="Codigo de vestimenta" />

      <div className="dresscode-content">
        <p>
          Mujeres <span className="dress-type">Vestido tropical</span>
        </p>
        <p>
          Hombres <span className="dress-type">Camisa guayabera</span>
        </p>
      </div>
      <div className="dresscode-suggests">
        <a href="https://pin.it/2BnXz8hHf" target="_blank">
          <button>Mira algunas sugerencias aqui</button>
        </a>
      </div>
    </div>
  );
}

export default Dresscode;
