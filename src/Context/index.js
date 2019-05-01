import React from "react";
import { reducer, INITIAL_STATE } from "./reducers/poke";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const poke = React.useReducer(reducer, INITIAL_STATE);
  return <Context.Provider value={poke}>{children}</Context.Provider>;
};
