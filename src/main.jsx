import React from "react"
import ReactDOM from "react-dom/client"
// import { BrowserRouter } from "react-router-dom"
import { HashRouter as Router } from 'react-router-dom';
import AppRouter from "./routes/routes" // Renomeado para AppRouter
import GlobalStyle from "./styles/globalStyle"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AppRouter />
    </Router>
    <GlobalStyle />
  </React.StrictMode>
);


