import React from 'react'
import ShowExpense from '../Component/ShowExpenses/ShowExpense'
import BarChartComponent from '../Component/Charts/BarChart'
const BodySection = () => {
  return (
    <div>
        <ShowExpense />
        <BarChartComponent/>
    </div>
  )
}

export default BodySection