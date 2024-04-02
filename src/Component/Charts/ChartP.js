import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip, Legend);

function ChartP({ dummyData }) {
  // const [chartData, setChartData] = useState({});
  if (dummyData.length === 0) {
    return <div>No expenses to display</div>;
  }

  const groupedData = dummyData.length
    ? dummyData.reduce((acc, curr) => {
        if (acc[curr.category]) {
          acc[curr.category] += curr.amount;
        } else {
          acc[curr.category] = curr.amount;
        }
        return acc;
      }, {})
    : {};

  const categories = Object.keys(groupedData);
  const amounts = Object.values(groupedData);

  const COLORS = ["#FFBB28", "#00C49F", "#0088FE", "#FF8042"];
  const backgroundColors = categories.map(
    (_, index) => COLORS[index % COLORS.length]
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: backgroundColors,
        hoverOffset: 4,
      },
    ],
  };
  // setChartData(chartData);
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Expenses by Category",
            },
          },
        }}
      />
    </div>
  );
}

export default ChartP;
