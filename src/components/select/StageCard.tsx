import Scores from "./Scores";

interface Stage {
  id: number;
  img_url: string;
  name: string;
  score: [Score];
}
interface Score {
  id: number;
  username: string;
  time: number;
}

const blankScore: Score = {
  id: 0,
  username: "---",
  time: 0,
};

function StageCard({ stageData }: { stageData: Stage }) {
  if (!Array.isArray(stageData.score)) stageData.score = [blankScore];
  const scores: Score[] = [
    ...stageData.score.slice(0, 5),
    ...Array(5 - Scores.length).fill(blankScore),
  ];
  return (
    <div className="card">
      <a href={`/stage/${stageData.id}`} className="stageInfo">
        <img src={stageData.img_url} alt={stageData.name} />
        <p>{stageData.name}</p>
      </a>
      <div className="scores">
        {scores.map((score, index) => {
          return <Scores scoreData={score} key={index} index={index + 1} />;
        })}
      </div>
    </div>
  );
}

export default StageCard;
