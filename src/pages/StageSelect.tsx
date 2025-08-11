import Select from "../components/select/Select";
import "../components/select/Select.css";
import useFetch from "../hooks/useFetch";

function StageSelect() {
  const { data, loading, error } = useFetch("/stageselect", null);

  return (
    <div className="stageSelect">
      <header>Photo Tagging App</header>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <Select stageData={data} />}
    </div>
  );
}

export default StageSelect;
