import React from "react";
import nomatch from "../../img/404notfound.jpg";

const NoMatch = ({ className }) => {
  return (
    <section className="first-section">
      <div className="ui">
        <div className="flex-section">
          <div className="half-width">
            <h1 className="ui header ">404 - Page not found</h1>
            <p className="">The page you were looking for does not exist</p>
            <div>
              <a href="/#contactus" id="callUs">
                <button type="submit" className="ui primary button">
                  Bring me home
                </button>
              </a>
            </div>
          </div>
          <img
            className="half-width"
            src={nomatch}
            alt="web3 and software programming"
          />
        </div>
      </div>
    </section>
  );
};

export default NoMatch;
