
import './services.css';

function services() {
  return (
    <div>
      <h2>Projects</h2>
      < br />
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <a href="https://github.com/middas123/Online-Portfolio-" className="carousel-link">

            <img src="src/assets/IMG_0330.jpeg" className="d-block w-100" alt="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Porfolio Website</h5>
              <p>Website Portfolio Using Html, css and javascript</p>
            </div>
          </a>
          </div>
          <div className="carousel-item">
          <a href="https://github.com/middas123/tax-calculator"className="carousel-link">
            <img src="src/assets/sars.jpg" className="d-block w-100" alt="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sars Text Calc</h5>
              <p>Sars Tax Calculator using Java</p>
            </div>
            </a>
          </div>
          <div className="carousel-item">
          <a href="https://github.com/middas123/snake-game"className="carousel-link">
            <img src="src/assets/snake game.png" className="d-block w-100" alt="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Snake Game</h5>
              <p>Snake Game using ReactNative with NodeJs as backEnd</p>
            </div>
          </a>
          </div>
          <div className="carousel-item">
          <a href="https://github.com/middas123/MPS-WEBSITE-PROJECT" className="carousel-link">
            <img src="src/assets/mzam.png" className="d-block w-100" alt="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5> school Website</h5>
              <p>School Website Using Html, css and javascript</p>
            </div>
          </a>
          </div>
          <div className="carousel-item">
          <a href="https://github.com/middas123/Password-Generator" className="carousel-link">
            <img src="src/assets/pass gen.jpg" className="d-block w-100" alt="image" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Password Gen</h5>
              <p>Password Generator using Python and Anaconda</p>
            </div>
          </a>
          </div>
          
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

export default services;
