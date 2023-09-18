import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import API from "../../../api/dashboard/works";

const ColumnWithDataLabels = (props) => {
  const [series, setSeries] = React.useState([]);
  const [options, setOptions] = React.useState({});

  useEffect(async () => {
    getSeries();
  }, []);

  const getSeries = async () => {
    const response = await API.getWorksYear();
    if (response.ok) {
      setSeries([
        {
          name: "ToolStrings",
          data: response.result[0],
        },
        {
          name: "Sistemas",
          data: response.result[1],
        },
        {
          name: "Electromecanica",
          data: response.result[2],
        },
        {
          name: "Seguridad Industrial",
          data: response.result[3],
        },
      ]);
      getOptions();
    }
  };

  const getOptions = async () => {
    setOptions({
      title: { text: "Toolstrings por periodo", align: "left" },
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      colors: ["#556ee6", "#34c38f", "#f46a6a", "#f1b44c"],
      grid: {
        borderColor: "#f1f1f1",
      },
      xaxis: {
        categories: [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ],
        position: "top",
        labels: {
          offsetY: -18,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          },
        },
      },
      title: {
        text: "Toolstrings por periodo",
        floating: true,
        offsetY: 10,
        align: "left",
        style: {
          color: "#444",
        },
      },
    });
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={380}
      />
    </React.Fragment>
  );
};

export default ColumnWithDataLabels;
