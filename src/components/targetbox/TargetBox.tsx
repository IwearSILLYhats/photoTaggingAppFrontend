import Dropdown from "./Dropdown";
import "./TargetBox.css";

function TargetBox({ targets, coordinates, guess }: targetBoxProps) {
  return (
    <div
      className="targetBox"
      style={{ top: coordinates.y + "%", left: coordinates.x + "%" }}
    >
      <Dropdown targets={targets} coordinates={coordinates} guess={guess} />
    </div>
  );
}

export default TargetBox;
