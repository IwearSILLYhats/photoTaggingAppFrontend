import { useState } from "react";
import Stage from "../components/stage/Stage";
import "./App.css";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function App() {
  const params = useParams();
  const { data, loading, error } = useFetch(`/stage/${params.stageid}`, null);
  const [target, setTarget] = useState(false);

  function stageClick(click: React.MouseEvent<HTMLElement>) {
    const targ = click.target as HTMLDivElement;
    if (targ.closest(".stage")) {
      setTarget(true);
    } else {
      setTarget(false);
    }
  }

  return (
    <main onClick={(e) => stageClick(e)}>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <header>{data.name}</header>}
      {data && <Stage target={target} stageData={data} />}
    </main>
  );
}

export default App;
