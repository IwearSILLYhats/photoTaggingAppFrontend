function Target({ located }: { located: coordinates }) {
  return (
    <div
      className="targetBox marker"
      style={{ top: located.y + "%", left: located.x + "%" }}
    ></div>
  );
}

export default Target;
