import React from "react";

function Header() {
    return (
      <div className="row">
      <div className="col-sm-1"></div>
  
      <div className="col-sm-10">
          <div className="jumbotron">
              <h1 className="display-4">Rose Memory Game</h1>
  
  
              <h2>
                  A rose by any other name would smell just as sweet. Test your memory by starting the fun with clicking on any particular rose. But try not click the same rose twice in a row otherwise you'll lose the game!
              </h2>
              <br />
              <a className="btn btn-primary btn-lg" href="https://github.com/NW91" role="button"
                  // eslint-disable-next-line react/jsx-no-target-blank
                  target="_blank">Github Here</a>
          </div>
      </div>
      <div className="col-sm-1"></div>
  </div>
    );
  }
  export default Header;