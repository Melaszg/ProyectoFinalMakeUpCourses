import "./sobrenosotras.css";
import Mariana from "../../assets/img/Mariana.png";
import Camila from "../../assets/img/Camila.png";
import Isabella from "../../assets/img/Isabella.png";
import Melany from "../../assets/img/Melany.png";

function SobreNosotras() {
  return (
    <section className="sobrenosotras" id="equipo de trabajo">
      <section className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <article className="articulo">
              <h2 className="titulos text-center">equipo de trabajo</h2>
              <p className="textos text-justify">
                Somos un equipo de trabajo que iniciamos un proyecto, el cual
                ofrece un contenido de buena calidad. Nacen con el propósito de
                plasmar la creatividad, buen gusto y la moda para realzar la
                belleza.
              </p>
              <p className="textos text-justify">
                Es creado por 4 chicas como proyecto para llevar el conocimiento
                del maquillaje a personas interesadas que no tienen el tiempo
                suficiente para recibir un curso presencial.
              </p>
            </article>
          </div>
          <div className="col-md-6">
            <div className="equipo">
              <ul className="integrantes d-flex flex-row flex-wrap justify-content-center align-items-center">
                <li>
                  <div>
                    <div className="grupo">
                      <img src={Mariana} width="210px" alt="" />
                    </div>
                    <div className="nombres text-center">
                      <h4>Mariana Olarte</h4>
                      <p className="habilidades text-center">Ilustración y diseño</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="grupo">
                      <img src={Camila} width="210px" alt="" />
                    </div>
                    <div className="nombres text-center">
                      <h4>Camila Jiménez</h4>
                      <p className="habilidades text-center">Redacción e Illustrator</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="grupo">
                      <img src={Melany} width="210px" alt="" />
                    </div>
                    <div className="nombres text-center">
                      <h4>Melany Salazar</h4>
                      <p className="habilidades text-center">Maquetación web e Illustrator</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="grupo">
                      <img src={Isabella} width="210px" alt="" />
                    </div>
                    <div className="nombres text-center">
                      <h4>Isabella Valencia</h4>
                      <p className="habilidades text-center">After Effects y Premiere Pro</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default SobreNosotras;
