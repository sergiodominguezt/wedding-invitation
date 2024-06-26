import "./confirm.css";
import { FaWhatsapp } from "react-icons/fa";

function Confirm() {
  return (
    <div className="confirm-container">
      <h1>Confirma tu asistencia</h1>
      <a href="https://wa.me/message/OZ7JHBKNDTZ2L1" target="_blank">
        <button>
          <FaWhatsapp /> Confirmar asistencia
        </button>
      </a>
    </div>
  );
}

export default Confirm;
