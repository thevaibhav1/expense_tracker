import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import Context from "../../ContextProvider";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js/auto";
ChartJS.register(Tooltip, Legend);

function ChartP() {
  const { Dummy_data } = useContext(Context);
  if (Dummy_data.length === 0) {
    return <div>No expenses to display</div>;
  }

  const groupedData = Dummy_data.reduce((acc, curr) => {
    if (acc[curr.category]) {
      acc[curr.category] += curr.amount;
    } else {
      acc[curr.category] = curr.amount;
    }
    return acc;
  }, {});

  const categories = Object.keys(groupedData);
  const amounts = Object.values(groupedData);

  const COLORS = ["#FFBB28"];
  const backgroundColors = categories.map(
    (_, index) => COLORS[index % COLORS.length]
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: amounts,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Bar Chart</h2> */}
      <Bar
        data={chartData}
        options={{
          indexAxis: "y", // Display data along the y-axis
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
