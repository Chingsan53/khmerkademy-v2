import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./Learn.css";
const Learn = () => {
  return (
    <div className="main-flex">
      <Fragment>
        <div className="main-grid">
          <div className="section"><img src="/section-img/pngegg.png" alt="1" className="img" />
            <div className="small-section">
              <div className="title">
                <h2>Section 1: Beginner</h2>
              </div>
              <Link to="/lesson/daily-phrase" className="button-7">CONTINUE</Link>
            </div>
          </div>
        </div>
        <div className="main-grid">
          <div className="section"><img src="/section-img/pokemon.png" alt="1" className="img" />
            <div className="small-section">
              <div className="title">
                <h2>Section 2: Pre-Intermediate</h2>
              </div>
              <Link to="/lesson/daily-phrase" className="button-7">CONTINUE</Link>
            </div>
          </div>
        </div>
        <div className="main-grid">
          <div className="section"><img src="/section-img/toroto.png" alt="1" className="img" />
            <div className="small-section">
              <div className="title">
                <h2>Section 3: Intermediate</h2>
              </div>
              <Link to="/lesson/daily-phrase" className="button-7">CONTINUE</Link>
            </div>
          </div>
        </div>
        <div className="main-grid">
          <div className="section"><img src="/section-img/charmander.png" alt="1" className="img" />
            <div className="small-section">
              <div className="title">
                <h2>Section 4: Upper-Intermediate</h2>
              </div>
              <Link to="/lesson/daily-phrase" className="button-7">CONTINUE</Link>
            </div>
          </div>
        </div>
        <div className="main-grid">
          <div className="section"><img src="/section-img/sonic.png" alt="1" className="img" />
            <div className="small-section">
              <div className="title">
                <h2>Section 5: Advance</h2>
              </div>
              <Link to="/lesson/daily-phrase" className="button-7">CONTINUE</Link>
            </div>
          </div>
        </div>
        
        <Outlet />
      </Fragment>
      <div className="header-chat"></div>
    </div>
  );
};

export default Learn;
