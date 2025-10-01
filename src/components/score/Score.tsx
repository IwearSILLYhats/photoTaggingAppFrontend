import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Score({
  time,
  token,
}: {
  time: number;
  token: string;
}) {
  const { stageid } = useParams() as { stageid: string };
  const [name, setName] = useState("");
  async function postScore(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      id: stageid,
      username: name,
      time: time,
      token: token,
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
    if (response.success) {
      const navigate = useNavigate();
      navigate("/");
    }
    return;
  }
  return (
    <div className="scoreWrapper">
      <form onSubmit={(e) => postScore(e)}>
        <input type="hidden" name="stage_id" value={stageid} />
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setName(e.target.value)}
        />
        <span className="time">{time}</span>
        <button type="submit">Submit Score</button>
      </form>
    </div>
  );
}
