import React from "react";
import ChartP from "./ChartP";
import { useContext } from "react";
import Context from "../../ContextProvider";

const PieChartComponent = () => {
  const { Dummy_data } = useContext(Context);
  return (
    <div>
      <h2>Expense Pie Chart</h2>
      <ChartP dummyData={Dummy_data} />
    </div>
  );
};

export default PieChartComponent;
