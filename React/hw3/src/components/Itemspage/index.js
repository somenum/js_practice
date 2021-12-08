import React from "react";
import Itemlist from "../Itemlist";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataRequest } from "../../redux/actions";

function Itemspage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataRequest());
  });

  const data = useSelector((store) => {
    return store.data;
  });

  return <Itemlist data={data} />;
}

export default Itemspage;
