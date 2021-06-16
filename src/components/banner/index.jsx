import { Link } from "react-router-dom";
import "./banner.css";

function Banner() {
  return (
    <section className="banner">
      <div className="container contenido d-flex justify-content-center flex-column align-items-center">
        <div className="container info-inicio">
          <h1>
            <span className="curso">curso online</span>
          </h1>
          <h1 className="maquillaje">de maquillaje</h1>
          <p>
            Aprende sobre nuevas tendencias en maquillaje y sumérgete en
            <br />
            este increíble mundo.
          </p>
          <Link span className="boton" to="registro">
            inscribirse
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
