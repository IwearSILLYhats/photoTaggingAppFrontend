function Scores({ scoreData, index }: { scoreData: scoreData; index: number }) {
  return (
    <>
      <p>{index}</p>
      <p>{scoreData.username}</p>
      <p>{scoreData.time}</p>
    </>
  );
}

export default Scores;
