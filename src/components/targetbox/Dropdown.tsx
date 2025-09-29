function Dropdown({ targets, coordinates, guess }: targetBoxProps) {
  return (
    <div className="dropdown">
      <ul>
        {targets.map((target: Character) => {
          if (target?.found) {
            return (
              <li key={target.id} data-id={target.id} className="found">
                {target.name}
              </li>
            );
          }
          return (
            <li
              key={target.id}
              data-id={target.id}
              onClick={() => guess({ id: target.id, coordinates })}
            >
              {target.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Dropdown;
