import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import RoomProvider from "./Context/Context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <RoomProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RoomProvider>,

  document.getElementById("root")
);

serviceWorker.register();
