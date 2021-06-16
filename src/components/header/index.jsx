import "./header.css";
import logo from "../../assets/img/logo.png";

function Header() {
  const navbaritems = ["cursos", "técnicas de maquillaje", "equipo de trabajo"];

  return (
    <main className="home">
      <div className="container">
        <header className="py-2">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a href="#" className="navbar-brand">
              <img src={logo} width="130px" alt="Make-Up Courses" />
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#menu"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="navbar-nav ml-auto main-menu">
                {navbaritems.map((item, value) => (
                  <li menus={value} className="nav-item">
                    <a href={`#${item}`} className="nav-link text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </main>
  );
}

export default Header;
