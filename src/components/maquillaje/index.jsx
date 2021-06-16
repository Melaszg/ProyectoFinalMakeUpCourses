import "./maquillaje.css";
import Diseños from "../../assets/img/DiseñosMaquillaje.png";
import TipsMaquillaje from "../../assets/img/TipsMaquillaje.png";

function Maquillaje() {
  return (
    <section className="consejos" id="maquillaje">
      <div className="container">
        <h2 className="text-center my-5">Maquillaje</h2>
        <div className="row flex-row flex-wrap text-center">
          <a
            className="col-md-6"
            href="https://co.pinterest.com/makeupcourses20/boards/"
          >
            <picture>
              <img src={Diseños} width="250px" alt="" />
            </picture>
            <h4>
              <span className="subtitulo">Diseños</span>
            </h4>
          </a>
          <a
            className="col-md-6"
            href="https://co.pinterest.com/makeupcourses20/boards/"
          >
            <picture>
              <img src={TipsMaquillaje} width="250px" alt="" />
            </picture>
            <h4>
              <span className="subtitulo">Tips</span>
            </h4>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Maquillaje;
