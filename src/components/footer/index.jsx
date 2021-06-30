import "./footer.css";
import logo from "../../assets/img/logo.png";
import Instagram from "../../assets/img/instagram.png";
import Pinterest from "../../assets/img/pinterest.png";
import Email from "../../assets/img/email.png";

function Footer() {
  return (
    <footer className="footer">
      <section className="container">
        <section className="info d-flex justify-content-between flex-row text-justify">
          <aside>
            <a className="logo" href="#">
              <img src={logo} width="170px" alt="" />
            </a>
            <h5>©Copyright Make-Up Courses 2020</h5>
          </aside>
          <aside className="redes d-flex justify-content-center flex-wrap align-items-center flex-column">
            <h4>Redes Sociales</h4>
            <div className="iconos">
              <a href="https://www.instagram.com/make_upcourses/?hl=es-la">
                <img src={Instagram} alt="" />
              </a>
              <a href="https://co.pinterest.com/makeupcourses20/boards/">
                <img src={Pinterest} alt="" />
              </a>
              <a href="mailto:makeup.courses20@gmail.com">
                <img src={Email} alt="" />
              </a>
            </div>
          </aside>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
