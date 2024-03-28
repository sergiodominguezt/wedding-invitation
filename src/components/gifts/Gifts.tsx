import "./gifts.css";
import gift from "../../assets/gifts.png";

function Gifts() {
  return (
    <div className="gifts-container">
      <h1>Regalos</h1>
      <p>Lluvia de sobres</p>
      <img src={gift} />
    </div>
  );
}

export default Gifts;
