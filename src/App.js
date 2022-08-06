import React, { useState } from "react";
import "./App.css";
import config from "./config";
import Field from "./components/Field/Field";

function App() {

  return (
      <div className="App">
        <Field width={config.width} height={config.height} />
      </div>
  );
}

export default App;
