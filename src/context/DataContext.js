import { createContext, useState, useContext } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [foodData, setFoodData] = useState([]);
  const [waterIntake, setWaterIntake] = useState(0);

  const addFood = (food) => setFoodData([...foodData, food]);
  const addWater = (amount) => setWaterIntake((prev) => prev + amount);

  return (
    <DataContext.Provider value={{ foodData, addFood, waterIntake, addWater }}>
      {children}
    </DataContext.Provider>
  );
};
