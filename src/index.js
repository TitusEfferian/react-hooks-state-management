import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { ContextProvider } from "./Context";
import Card from "./Components/Card";

function App() {
  return (
    <ContextProvider>
      <Card />
    </ContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
