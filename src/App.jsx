import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Details } from "./components/Details";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Details />
    </div>
  );
}

export default App;
