import StageCard from "./StageCard";

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

function Select({ stageData }: { stageData: Stage[] }) {
  return (
    <div className="select">
      {stageData &&
        stageData.length > 0 &&
        stageData.map((stage) => {
          return <StageCard stageData={stage} key={stage.id} />;
        })}
    </div>
  );
}

export default Select;
