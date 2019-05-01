import {
  REQUEST_POKE_DATA,
  REQUEST_POKE_SUCCESS
} from "../Context/actions/poke";

export const fetchData = async dispatch => {
  await dispatch({ type: REQUEST_POKE_DATA });
  const result = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=50");
  const parseData = await result.json();
  await dispatch({ type: REQUEST_POKE_SUCCESS, data: parseData });
};
