import React from "react";
import { Context } from "../Context";
import { fetchData } from "../services/poke";

const Card = () => {
  const [result, dispatch] = React.useContext(Context);
  React.useEffect(() => {
    fetchData(dispatch);
  }, [dispatch]);
  if (result.data !== undefined) {
    return result.data.results.map((x, y) => (
      <img
        alt="poke"
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
          (y + 1) +
          ".png"
        }
      />
    ));
  }
  return null;
};

export default Card;
