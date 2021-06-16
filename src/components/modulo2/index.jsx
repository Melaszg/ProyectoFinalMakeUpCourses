import "./modulo2.css";


function Modulo2() {
  return (
    <section className="consejos" id="maquillaje">
      <div className="container">
        <h2 className="text-center my-5">Módulo 2</h2>
        <p className="textos text-justify">Debemos tener en cuenta que tener un buen cuidado y preparación de piel es esencial antes, durante y después del maquillaje. Por ello, en este modulo nos enfocaremos en cuidados de la piel y te enseñaremos algunos productos que pueden ser aliados para mantener un lindo rostro.</p>
        <div className="row flex-row flex-wrap text-center">
          <div
            className="col-md-6 col-sm-12 flex-wrap"
          >
           <iframe width="560" height="315" src="https://www.youtube.com/embed/YdZALIRj6e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <p className="textos text-justify">En esta rutina facial de día te mostraremos el paso a paso de una buena limpieza para el rostro y la realización de una mascarilla exfoliante con productos caseros.</p>
          </div>
          <div
            className="col-md-6 col-sm-12 flex-wrap"
          >
           <iframe width="560" height="315" src="https://www.youtube.com/embed/h_4adSsMlLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <p className="textos text-justify">En este video aprenderás a cuidar tu rostro en la noche correctamente, te enseñaremos una buena limpieza y aprenderás qué productos son buenos pare esta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modulo2;
