import { useEffect, useState } from "react";
import Stage from "../components/stage/Stage";
import "./App.css";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Score from "../components/score/Score";

function App() {
  const params = useParams();
  const { data, loading, error } = useFetch(`/stage/${params.stageid}`, null);
  const [target, setTarget] = useState(false);
  const [score, setScore] = useState(false);
  const [time, setTime] = useState(0);

  function Timer() {
    useEffect(() => {
      const intervalId = setInterval(() => {
        if (time < 5999 && score === false) {
          setTime(time + 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
    const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    };
    return (
      <div>
        <h1>{formatTime(time)}</h1>
      </div>
    );
  }

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
      {data && (
        <header>
          {data.name}
          <Timer />
        </header>
      )}
      {data && <Stage target={target} setscore={setScore} stageData={data} />}
      {score && <Score time={time} />}
    </main>
  );
}

export default App;
