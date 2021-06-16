import "./headerregistro.css";
import logo from "../../assets/img/logo.png";

function HeaderRegistro() {
  return (
    <main className="home-registro">
      <div className="container">
        <header className="py-3 d-flex justify-content-center">
          <a href="/" className="navbar-brand">
            <img src={logo} width="130px" alt="Make-Up Courses" />
          </a>
        </header>
      </div>
    </main>
  );
}

export default HeaderRegistro;
