import Card from "../Card";
import React from "react";

function Itemlist({ data = [] }) {
  return (
    <>
      {data.map((data) => {
        return (
          <Card
            data={data}
            key={`${data.id}`}
            addButCart="true"
            addEmptyrtStar="true"
          />
        );
      })}
    </>
  );
}

export default Itemlist;
