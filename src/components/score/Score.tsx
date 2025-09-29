import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Score({ time }: { time: number }) {
  const { stageid } = useParams() as { stageid: string };
  const [name, setName] = useState("");
  async function postScore(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      id: stageid,
      username: name,
      time: time,
    };
    const request = await fetch(`${import.meta.env.VITE_API_URL}/score`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    });
    const response = await request.json();
    console.log(response);
    return;
  }
  return (
    <div className="scoreWrapper">
      <form onSubmit={(e) => postScore(e)}>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="time">{time}</span>
        <button type="submit"></button>
      </form>
    </div>
  );
}
