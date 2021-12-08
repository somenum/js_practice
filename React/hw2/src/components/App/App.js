import React from "react";

import Itemspage from "../Itemspage";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <div className="App">
          <div className="main__container">
            <Itemspage />
          </div>
        </div>
      </>
    );
  }
}

export default App;
