import "./modulo1.css";


function Modulo1() {
  return (
    <section className="consejos" id="maquillaje">
      <div className="container">
        <h2 className="text-center my-5">Módulo 1</h2>
        <p className="textos text-justify">En este modulo aprenderás cosas básicas sobre el maquillaje; tales como productos, utensilios y usos, los cuales te servirán para ir aprendiendo cada vez más sobre este tema.</p>
        <div className="row flex-row flex-wrap text-center">
          <div
            className="col-md-6 col-sm-12 flex-wrap"
          >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mefnAtifKps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="textos text-justify">Debemos tener presente que no todas las brochas son iguales y tienen la misma función. Por ello, en este video te daremos una breve explicación sobre los tipos tipos de brochas, sus usos y funciones que cada una tiene, para que así puedas ampliar tu conocimiento y conocer más sobre estas.</p>
          </div>
          <div
            className="col-md-6 col-sm-12 flex-wrap"
          >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/r3hqAodNN7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="textos text-justify">Cada persona tiene una rutina diferente a la hora de maquillarse, pero debemos tener una buena preparación y un buen orden para maquillarnos correctamente. 
En este video te enseñaremos una rutina de maquillaje diario, sencillo de hacer y con materiales que pueden estar a tu alcance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modulo1;
