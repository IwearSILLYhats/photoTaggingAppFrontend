import StageCard from "./StageCard";

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
