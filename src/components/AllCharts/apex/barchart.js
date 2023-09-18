import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import API from "../../../api/dashboard/tools";

const BarChart = (props) => {
  const [series, setSeries] = React.useState([]);
  const [options, setOptions] = React.useState({});

  useEffect(async () => {
    getSeries();
  }, []);

  const getSeries = async () => {
    const response = await API.getToolsYear();
    if (response.ok) {
    setSeries([
      {
        data: [response.result[0], response.result[1], response.result[2], response.result[3]],
      },
    ]);
    getOptions();
    }
  };

  const getOptions = () => {
    setOptions({
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: true,
      },

      colors: ["#f1b44c"],
      grid: {
        borderColor: "#f1f1f1",
      },
      xaxis: {
        categories: [
          "Activos",
          "Inventario",
          "Total Herramientas",
          "Total Hojas de vida",
        ],
      },
    });
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="350"
      />
    </React.Fragment>
  );
};

export default BarChart;
