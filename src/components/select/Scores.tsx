function Scores({ scoreData, index }: { scoreData: scoreData; index: number }) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 1000 / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <p>{index}</p>
      <p>{scoreData.username}</p>
      <p>{formatTime(scoreData.time)}</p>
    </>
  );
}

export default Scores;
