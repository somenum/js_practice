import Card from "../Card";
import React from "react";

class Itemlist extends React.PureComponent {
  state = {
    data: [],
  };
  render() {
    const { data, addItem } = this.props;
    return (
      <>
        {data.map((data) => {
          return <Card data={data} key={`${data.id}`} addItem={addItem} />;
        })}
      </>
    );
  }
}

Itemlist.defaultProps = {
  data: [],
  addItem: () => {},
};

export default Itemlist;
