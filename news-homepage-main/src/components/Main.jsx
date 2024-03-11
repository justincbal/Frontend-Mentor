import "../styles/Main.css";

const Main = () => {
  return (
    <>
      <div className="grid-section">
        <img
          className="hero"
          src="../../public/assets/images/image-web-3-desktop.jpg"
          alt=""
          srcset=""
        />
        <div className="side-panel">
          <h2 className="side-heading">New</h2>
          <div className="side-article">
            <h3 className="side-article-heading">Hydrogen VS Electric Cars</h3>
            <p className="side-article-text">Will hydrogen fuled cars ever catch up to EVs?</p>
          </div>
          <div className="side-article">
            <h3 className="side-article-heading">The Downsides of AI Artistry</h3>
            <p className="side-article-text">What are the possible adverse effects of on-demand AI Image generation?</p>
          </div>
          <div className="side-article">
            <h3 className="side-article-heading">Is VC Funding Drying Up?</h3>
            <p className="side-article-text">Private funding vy VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
        <div className="middle">
          <h2 className="mid-side">The Bright Future of Web 3.0?</h2>
          <div className="mid">
            <p className="mid-text">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <button className="mid-button">READ MORE</button>
          </div>
        </div>
        <div className="bottom">test</div>
      </div>
    </>
  );
};

export default Main;
