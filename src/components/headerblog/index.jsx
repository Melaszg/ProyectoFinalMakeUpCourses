import "./headerblog.css";
import logo from "../../assets/img/logo.png";

function HeaderBlog() {
  const navbaritemsblog = ["maquillaje", "piel", "cursos"];

  return (
    <section className="home-blog">
      <header className="container py-2">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <h1 className="navbar-brand">
            <a href="/">
              <img
                className="img-fluid"
                src={logo}
                width="130px"
                alt="Make Up Courses"
              />
            </a>
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#menu"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="menu"
          >
            <ul className="navbar-nav main">
              {navbaritemsblog.map((item, key) => (
                <li menus={key} className="nav-item">
                  <a href={`#${item}`} className="nav-link text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default HeaderBlog;
