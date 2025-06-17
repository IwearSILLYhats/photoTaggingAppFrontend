import { useState } from "react";
import Stage from "../components/stage/Stage";
import "./App.css";

function App() {
  const [target, setTarget] = useState(false);

  function stageClick(click: React.MouseEvent<HTMLElement>) {
    const targ = click.target as HTMLDivElement;
    if (targ.closest(".stage")) {
      console.log("Target true");
      setTarget(true);
    } else {
      console.log("Target false");
      setTarget(false);
    }
  }

  return (
    <main onClick={(e) => stageClick(e)}>
      <Stage target={target} />
    </main>
  );
}

export default App;
