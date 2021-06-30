import "./videointro.css";


function VideoIntro() {
  return (
    <section className="consejos" id="maquillaje">
      <div className="container text-center">
        <h2 className="text-center my-5">Introducción</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/c2EK8Y-bQe4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </section>
  );
}

export default VideoIntro;
