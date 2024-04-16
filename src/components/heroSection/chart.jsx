import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import './chart.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      height: 260,
    //   width: 420,
      theme: "light2",
      axisY: {
        gridColor: "transparent",
        maximum: 100,
      },
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 60, label: "Facebook" },
            { y: 50, label: "YouTube" },
            { y: 40, label: "Instagram" },
          ],
        },
      ],
    };
    return (
      <div className="chartjs">
        <CanvasJSChart className="chart" options={options} />
      </div>
    );
  }
}
export default App;
