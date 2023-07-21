import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.variable.css";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

ConfigProvider.config({
  theme: {
    primaryColor: "#003782",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
    <Router>
      <Routes />
    </Router>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
