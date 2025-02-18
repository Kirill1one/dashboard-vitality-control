import { useData } from "../context/DataContext";

const WaterTracker = () => {
  const { waterIntake, addWater } = useData();

  return (
    <div className="container">
      <h2>Трекинг воды</h2>
      <p>Выпито: {waterIntake} мл</p>
      <button onClick={() => addWater(250)}>+250 мл</button>
      <button onClick={() => addWater(500)}>+500 мл</button>
    </div>
  );
};

export default WaterTracker;
