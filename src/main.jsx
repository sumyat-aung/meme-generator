import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Content from "./components/Content";
import "./style.css";

const root = document.getElementById("root");

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

ReactDOM.createRoot(root).render(<App />);
