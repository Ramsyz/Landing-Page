import "./Hero.css";
import {
  FaDatabase,
  FaAsterisk,
  FaAccusoft,
  FaFacebook,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          {/* hero-left */}
          <div className="col-1">
            <h1>Data to enrich your</h1>
            <h1>
              <span className="primary-color">online business</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              numquam, nemo et quam hic, odit aspernatur voluptatum nisi quas ab
              eum quis dolorum ratione excepturi repudiandae debitis doloribus
              exercitationem quae?
            </p>
            <div className="used-by">
              <p>USED BY</p>
              <div className="icons">
                <span>
                  <FaDatabase />
                  Finxx
                </span>
                <span>
                  <FaAsterisk />
                  Lyc AI
                </span>
                <span>
                  <FaAccusoft />
                  Softol
                </span>
              </div>
            </div>
          </div>
          {/*hero-Right*/}
          <div className="col-2">
            <div className="form-layout">
              <div className="form-container">
                <p className="sign-in-txt">Sign in With</p>
                <div className="social-login">
                  <span>
                    <FaFacebook size={20} />
                  </span>
                  <span>
                    <FaTwitter size={20} />
                  </span>
                  <span>
                    <FaGithub size={20} />
                  </span>
                </div>
                <div className="divider">
                  <p>
                    <span>Or</span>
                  </p>
                </div>
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Password" />
                  <button>Create Account</button>
                </form>
              </div>
              <div className="form-footer">
                <p>
                  By signing up your agreeing to our
                  <span className="primary-color">Terms, Data Policy</span>
                  and <span className="primary-color">Cookies Policy</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
