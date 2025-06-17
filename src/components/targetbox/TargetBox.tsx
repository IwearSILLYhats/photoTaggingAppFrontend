import Dropdown from "./Dropdown";
import "./TargetBox.css";

interface targetBoxProps {
  targets: string[];
  coordinates: {
    x: number;
    y: number;
  };
}

function TargetBox({ targets, coordinates }: targetBoxProps) {
  return (
    <div
      className="targetBox"
      style={{ top: coordinates.y, left: coordinates.x }}
    >
      <Dropdown targets={targets} />
    </div>
  );
}

export default TargetBox;
