import "./piel.css";
import Mascarillas from "../../assets/img/MascarillasPiel.png";
import TipsPiel from "../../assets/img/TipsPiel.png";

function Piel() {
  return (
    <section className="consejos" id="piel">
      <div className="container">
        <h2 className="text-center my-5">Piel</h2>
        <div className="row flex-row flex-wrap text-center">
          <a
            className="col-md-6"
            href="https://co.pinterest.com/makeupcourses20/boards/"
          >
            <picture>
              <img src={Mascarillas} width="250px" alt="" />
            </picture>
            <h4>
              <span className="subtitulo">Mascarillas</span>
            </h4>
          </a>
          <a
            className="col-md-6"
            href="https://co.pinterest.com/makeupcourses20/boards/"
          >
            <picture>
              <img src={TipsPiel} width="250px" alt="" />
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

export default Piel;
