import React from "react";
import software from "../../img/software.jpg";
import software2 from "../../img/software2.jpg";
const Home = ({ className }) => {
  return (
    <div className="homepage">
      <section className="first-section">
        <div className="ui">
          <div className="flex-section">
            <div className="half-width">
              <h1 className="ui header ">
                Software developers to scale up your business
              </h1>
              <p className="">
                Create Web softwares, SaaS, Web3 Dapps, NFTs
                with&nbsp;one&nbsp;trusted&nbsp;team
              </p>
              <div>
                <a href="/#contactus" id="callUs">
                  <button type="submit" className="ui primary button">
                    Let's talk
                  </button>
                </a>
              </div>
            </div>
            <img
              className="half-width"
              src={software}
              alt="web3 and software programming"
            />
          </div>
        </div>
      </section>
      <section className="services-section lightgray-section">
        <div className="ui container">
          <div className="flex-section">
            <div className="third-width">
              <h2 className="ui header">GrilledCode is your partner for</h2>
            </div>
            <div className="two-third-width">
              <div className="grid">
                <div className="grid-block">
                  <i className="ui icon desktop" />
                  <h3 className="ui header">Web Development</h3>
                  <p>
                    Web Applications and SaaS taylor made to your needs - Using
                    ReactJS, NodeJS, MongoDB, and third party services
                  </p>
                </div>
                <div className="grid-block">
                  <i className="ui icon desktop" />
                  <h3 className="ui header">
                    Web3, Dapps, NFT games and Minting sites
                  </h3>
                  <p>
                    Build Web3 applications or custom made smart contracts for
                    your needs - Using Solidity, ReactJS, NodeJS and blockchain
                    services
                  </p>
                </div>
                <div className="grid-block">
                  <i className="ui icon server" />
                  <h3 className="ui header">API and Web Services</h3>
                  <p>
                    Costum APIs or Web Services using NodeJS, MongoDB, and
                    others
                  </p>
                </div>
                <div className="grid-block">
                  <i className="ui icon clock outline" />
                  <h3 className="ui header">Freelance</h3>
                  <p>
                    Hire a developer for any kind of work - Using ReactJS,
                    NodeJS, Javascript, Typescript, Solidity, and more. Starting
                    at 300$/day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
