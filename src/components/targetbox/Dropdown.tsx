interface dropdownProps {
  targets: string[];
}

function Dropdown({ targets }: dropdownProps) {
  return (
    <div className="dropdown">
      <ul>
        {targets.map((target: string) => {
          return <li>{target}</li>;
        })}
      </ul>
    </div>
  );
}
export default Dropdown;
