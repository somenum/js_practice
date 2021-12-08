import React from "react";
import Card from "../Card";

function Cart({ data = [] }) {
  if (data.length === 0) {
    return <h1>There are no item to displey, please make your choice</h1>;
  } else if (data) {
    return data.map((data) => {
      return <Card data={data} delButCart={true} key={`${data.id}`} />;
    });
  }
}
export default Cart;
