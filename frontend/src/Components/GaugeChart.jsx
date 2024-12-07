import { PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from "react";

const GaugeChart = ({ value, color }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue((prev) => {
        const step = 5; // Incremento por passo
        if (prev < value) return Math.min(prev + step, value);
        if (prev > value) return Math.max(prev - step, value);
        return prev;
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [displayValue, value]);

  const normalizedValue = Math.min(Math.max(displayValue, 0), 400);
  const data = [
    { name: "Temperatura", value: normalizedValue },
    { name: "Restante", value: 400 - normalizedValue },
  ];

  const COLORS = [
    color, 
    "#ccc",
  ];

  const chartSize = 500;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "0",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "relative",
          width: `${chartSize}px`,
          height: `${chartSize / 2}px`,
        }}
      >
        <PieChart width={chartSize} height={chartSize / 2}>
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="100%"
            innerRadius={chartSize / 4}
            outerRadius={chartSize / 3}
            isAnimationActive={false} // Desativa animação inicial
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          {normalizedValue.toFixed(2)}°C
        </div>
        <div
          style={{
            position: "absolute",
            top: "120%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "15px",
            color: "gray",
            textAlign: "center",
          }}
        >
          Temperatura atual do freio do tambor do caminhão.
        </div>
      </div>
    </div>
  );
};

export default GaugeChart;
