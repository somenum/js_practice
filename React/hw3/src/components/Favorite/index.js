import React from "react";
import Card from "../Card";

function Favorite({ data = [], addFullStar = "", addEmptyrtStar = "" }) {
  if (data.length === 0) {
    return <h1>There are no item to displey, please make your choice</h1>;
  }
  return data.map((data) => {
    return (
      <Card
        data={data}
        addButCart={true}
        addFullStar={addFullStar}
        key={`${data.id}`}
        addEmptyrtStar={addEmptyrtStar}
      />
    );
  });
}

export default Favorite;
