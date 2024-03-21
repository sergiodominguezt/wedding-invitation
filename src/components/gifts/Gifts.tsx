import "./gifts.css";
import gift from "../../assets/gifts.png";

function Gifts() {
  return (
    <div className="gifts-container">
      <h1>Regalos</h1>
      <p>
        Tu presencia y buenos deseos son suficientes para nosotros en la boda,
        si tu quieres puedes enviarnos tus muestras de cariño en regalo de sobre
      </p>
      <img src={gift} />
    </div>
  );
}

export default Gifts;
