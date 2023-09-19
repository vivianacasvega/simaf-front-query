import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
//import API from "../../../api/dashboard/tools";

const BarChartCardType = (props) => {
  const [series, setSeries] = React.useState([]);
  const [options, setOptions] = React.useState({});

  useEffect(async () => {
    getSeries();
  }, []);

  const getSeries = async () => {
    //const response = await API.getToolsYear();
    if (true) {
    setSeries([
      {
        data: [134, 45, 34, 34,56,78],
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
          "Acto Inseguro",
          "Condición Insegura",
          "Aspecto Ambiental",
          "Desviación del Sistema",
          "Seguridad Vial",
          "Aspecto Positivo"
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
        height="300"
      />
    </React.Fragment>
  );
};

export default BarChartCardType;
