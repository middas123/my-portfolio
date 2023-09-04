
import './services.css';

function services() {
  return (
    <div className="projects-heading" id='services'>
      <br />
      <h2>Projects</h2>
      < br />
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <a href="https://github.com/middas123/Online-Portfolio-" className="carousel-link">
          <div className="carousel-image-container">
          <img
           src="https://i.ibb.co/tDR8Fqz/about-pic-removebg-preview-1.png"
            className="d-block w-100"
             alt="about-pic-removebg-preview-1"
            />
          </div>

            <div className="carousel-caption d-none d-md-block">
              <h5>Porfolio Website</h5>
              <p>Website Portfolio Using Html, css and javascript</p>
            </div>
          </a>
          </div>
          <div className="carousel-item">
            <a href="https://github.com/middas123/tax-calculator" className="carousel-link">
              <div className="carousel-image-container">
                <img 
                src="https://i.ibb.co/NrV8ZQW/sars.jpg" 
                className="d-block w-100"
                 alt="sars" />
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Sars Text Calc</h5>
                <p>Sars Tax Calculator using Java</p>
              </div>
            </a>
          </div>

          <div className="carousel-item">
          <a href="https://github.com/middas123/snake-game"className="carousel-link">
          <div className="carousel-image-container">
            <img src="https://i.ibb.co/2gKJw71/snake-game.png" className="d-block w-100" alt="snake-game"border="0"></img>
          </div>
            <div className="carousel-caption d-none d-md-block">
              <h5>Snake Game</h5>
              <p>Snake Game using ReactNative with NodeJs as backEnd</p>
            </div>
          </a>
          </div>
          <div className="carousel-item">
          <a href="https://github.com/middas123/MPS-WEBSITE-PROJECT" className="carousel-link">
          <div className="carousel-image-container">
            <img src="https://i.ibb.co/zVDB2Br/mzam.png" className="d-block w-100" alt="mzam" border="0"></img>
          </div>
            <div className="carousel-caption d-none d-md-block">
              <h5> School Website</h5>
              <p>School Website Using Html, css and javascript</p>
            </div>
          </a>
          </div>
          <div className="carousel-item">
          <a href="https://github.com/middas123/Password-Generator" className="carousel-link">
          <div className="carousel-image-container">
            <img src="https://i.ibb.co/Qd7xF7J/pass-gen-1.png" className="d-block w-100" alt="pass-gen-1" border="0"></img>
          </div>
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
