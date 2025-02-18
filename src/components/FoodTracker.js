import { useState } from "react";
import { useData } from "../context/DataContext";

const FoodTracker = () => {
  const { foodData, addFood } = useData();
  const [food, setFood] = useState(
    {
      name: "",
      calories: 0,
      protein: 0,
      fats: 0,
      carbs: 0
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(food);
    setFood({
      name: "",
      calories: 0,
      protein: 0,
      fats: 0,
      carbs: 0
    });
  };


  return (
    <div className="container">
      <h2>Трекинг еды</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Название продукта"
          value={food.name}
          onChange={(e) => setFood({
            ...food, name: e.target.value
          })} required />

        <input type="number" placeholder="Калории"
          value={food.calories}
          onChange={(e) => setFood({
            ...food, calories: +e.target.value
          })} required />
        <button type="submit">Добавить</button>

      </form>

      <ul>
        {foodData.map((item, index) => (
          <li key={index}>{item.name}: {item.calories} ккал </li>
        ))}
      </ul>
    </div>
  );

};


export default FoodTracker;