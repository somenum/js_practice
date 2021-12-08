import React from "react";
import Itemlist from "../Itemlist";

class Itemspage extends React.PureComponent {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("./items.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          data: [...data],
        });
      });
  }

  render() {
    return <Itemlist data={this.state.data} />;
  }
}

Itemspage.defaultProps = {
  data: [],
};

export default Itemspage;
