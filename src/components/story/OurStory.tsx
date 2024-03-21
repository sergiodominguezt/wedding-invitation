import "./ourstory.css";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import flowersbg from "../../assets/flowers-bg.png";

function OurStory() {
  return (
    <div className="our-story">
      <h1>Estás invitado</h1>
      <div className="circle-container">
        <img src={flowersbg} alt="Fondo flores" className="circle-image" />
        <div className="text-overlay">
          <div>Angie Isabella</div>
          <div>&</div>
          <div>Sergio Arturo</div>
        </div>
      </div>
      <Card>
        <CardBody>
          <CardTitle className="card-title">
            Queremos que nos acompañes
          </CardTitle>
          <CardText>
            El amor que ha crecido en nosotros desde la primera vez que nos
            conocimos, nos ha llevado hoy a buscar en Dios la gracia para formar
            una familia y un hogar santo, Por esta razón después de 6 años de
            noviazgo hemos decidido casarnos y compartir con las personas mas
            especiales para nosotros, esta gran felicidad
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default OurStory;
