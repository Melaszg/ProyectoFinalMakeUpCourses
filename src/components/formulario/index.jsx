import "./formulario.css";
import logo from "../../assets/img/logo.png";
import LogoFacebook from "../../assets/img/IconosRegistroFB.png";
import LogoGoogle from "../../assets/img/IconosRegistroG.png";

function Formulario() {
  return (
    <section className="banner-registro d-flex flex-column justify-content-center">
      <div className="container align-middle formulario">
        <section className="info d-flex flex-row flex-wrap justify-content-center flex-row text-justify">
          <aside className="form registrorapido d-flex justify-content-start flex-column">
            <a href="#" className="logo">
              <img src={logo} width="170px" alt="Make-Up Courses" />
            </a>
            <a
              class="botones-form text-center"
              href="https://www.facebook.com/v4.0/dialog/oauth?app_id=654310861715209&cbt=1603952964648&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfe1e26b7f344f8%26domain%3Dapp-vlc.hotmart.com%26origin%3Dhttps%253A%252F%252Fapp-vlc.hotmart.com%252Ff39131fee29f28c%26relation%3Dopener&client_id=654310861715209&display=popup&domain=app-vlc.hotmart.com&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fapp-vlc.hotmart.com%2Fsignup&locale=en_US&logger_id=f3ac0582751c9e&origin=1&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df18655e64e1db78%26domain%3Dapp-vlc.hotmart.com%26origin%3Dhttps%253A%252F%252Fapp-vlc.hotmart.com%252Ff39131fee29f28c%26relation%3Dopener%26frame%3Df10d5fefba3a8dc&response_type=token%2Csigned_request%2Cgraph_domain&scope=public_profile%2C%20email&sdk=joey&version=v4.0"
            >
              Registrate con Facebook
              <img src={LogoFacebook} width="14px" alt="Facebook" />
            </a>
            <a class="botones-form text-center" href="">
              Registrate con Google
              <img src={LogoGoogle} width="17px" alt="Facebook" />
            </a>
          </aside>
          <aside className="form registro d-flex justify-content-start flex-column">
            <h2 className="text-center">Regístrate</h2>
            <input
              className="espacios"
              type="text"
              name="nombres"
              id="nombres"
              placeholder="Nombre"
            />
            <input
              className="espacios"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <input
              className="espacios"
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
            />
            <input
              className="botonregistro"
              type="submit"
              value="Registrarse"
            />
          </aside>
        </section>
      </div>
    </section>
  );
}

export default Formulario;
