import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useData } from "../context/DataContext";

const Charts = () => {
  const { foodData } = useData();
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "bar",
        data: {
          labels: foodData.map((item) => item.name),
          datasets: [{ label: "Калории", data: foodData.map((item) => item.calories), backgroundColor: "blue" }],
        },
      });
    }
  }, [foodData]);

  return <canvas ref={chartRef} />;
};

export default Charts;
