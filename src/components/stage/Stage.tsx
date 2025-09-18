import TargetBox from "../targetbox/TargetBox";
import { useState } from "react";
import "./Stage.css";
import Target from "../targetbox/target";

function Stage({
  target,
  stageData,
}: {
  target: boolean;
  stageData: stageData;
}) {
  async function makeGuess(guess: guess) {
    const request = await fetch(`${import.meta.env.VITE_API_URL}/guess`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(guess),
    });
    const response: guessResponse = await request.json();
    if (response.error) {
      console.log(response.error);
      return;
    }
    console.log(response.success.message, response.success.character);
    const updatedList = targetList.filter(
      (e) => e.id !== response.success.character.id
    );
    console.log(updatedList);
    setTargetList([...updatedList, response.success.character]);
  }
  const [targetList, setTargetList] = useState(stageData.Character);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  function handleClick(click: React.MouseEvent<HTMLDivElement>) {
    const targ = click.target as HTMLDivElement;
    if (targ.closest(".stage") && !targ.closest(".dropdown")) {
      const x = click.nativeEvent.offsetX;
      const y = click.nativeEvent.offsetY;
      const targetWidth = targ.offsetWidth;
      const targetHeight = targ.offsetHeight;
      console.log((x / targetWidth) * 100, (y / targetHeight) * 100);
      setCoordinates({
        x: (x / targetWidth) * 100,
        y: (y / targetHeight) * 100,
      });
    }
  }
  return (
    <div
      className="stage"
      onClick={(event: React.MouseEvent<HTMLDivElement>) => handleClick(event)}
    >
      <img src={stageData.img_url} alt="" />
      {target && (
        <TargetBox
          targets={targetList}
          guess={makeGuess}
          coordinates={coordinates}
        />
      )}
      {targetList &&
        targetList.map((character) => {
          if (character?.found) {
            return (
              <Target key={character.id} located={character.coordinates!} />
            );
          }
        })}
    </div>
  );
}

export default Stage;
