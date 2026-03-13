import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Head from "./components/Head";
import "./index.css"; 

console.log(
  '%c👋 Hey, you found the console!',
  'color: #0f766e; font-size: 18px; font-weight: 700;'
);
console.log(
  'This portfolio was built by Ezra Clintoc with React, TypeScript & Tailwind.\n' +
  'Source → https://github.com/ezraclintoc\n' +
  'Say hi → ezraclintoc@gmail.com'
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>
);
