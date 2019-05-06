import React from "react";

function Header() {
    return (
      <div className="row">
      <div className="col-sm-1"></div>
  
      <div className="col-sm-10">
          <div className="jumbotron">
              <h1 className="display-4">Crystal Memory Game</h1>
  
  
              <h2>
                  Click on each gem, but try not to hit any duplicates otherwise you'll lose the game!
              </h2>
              <br />
              <a className="btn btn-primary btn-lg" href="https://github.com/NW91" role="button"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank">Main Page</a>
          </div>
      </div>
      <div className="col-sm-1"></div>
  </div>
    );
  }
  export default Header;