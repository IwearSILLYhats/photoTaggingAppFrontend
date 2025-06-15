import TargetBox from "../targetbox/TargetBox";
import { useState } from "react";
import "./Stage.css";

function Stage() {
  const targetList = ["Waldo", "Waldress", "Doggo", "Gangdalf"];
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  function handleClick(click: React.MouseEvent<HTMLDivElement>) {
    const targ = click.target as HTMLDivElement;
    if (targ.classList.contains("stage")) {
      const x = click.nativeEvent.offsetX;
      const y = click.nativeEvent.offsetY;
      const targetWidth = targ.offsetWidth;
      const targetHeight = targ.offsetHeight;
      console.log((x / targetWidth) * 100, (y / targetHeight) * 100);
      setCoordinates({ x: x, y: y });
    }
  }
  return (
    <div
      className="stage"
      onClick={(event: React.MouseEvent<HTMLDivElement>) => handleClick(event)}
    >
      {coordinates && (
        <TargetBox targets={targetList} coordinates={coordinates} />
      )}
    </div>
  );
}

export default Stage;
