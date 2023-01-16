import React from "react";
import ReactDOM from "react-dom/client";
import "./HomepageCss/index.css";
import "./HomepageCss/mainContent.css";
import "./HomepageCss/keyFrames.css";

import App from "./App";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
