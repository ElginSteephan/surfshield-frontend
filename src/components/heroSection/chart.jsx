import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import './chart.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      height: 260,
      theme: "light2",
      backgroundColor: "#F1F1F1", // Add background color here
      axisY: {
        gridColor: "transparent",
        maximum: 100,
      },
      
      data: [
        {
          type: "bar",
          // Remove colorSet property
          dataPoints: [
            { y: 60, label: "LOW", color: "#85D8A1" }, // Customize color for each data point
            { y: 50, label: "MID", color: "#FFE500" },
            { y: 40, label: "HIGH", color: "#FF0000" },
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
