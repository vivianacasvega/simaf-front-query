import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import API from "../../../api/dashboard/maintenances";

const ChartApex = (props) => {
  const [series, setSeries] = React.useState([]);
  const [options, setOptions] = React.useState({});

  useEffect(async () => {
    getSeries();
  }, []);

  const getSeries = async () => {
    const response = await API.getMantYear();
    if (response.ok) {
      setSeries([
        { name: "Maquinados", data: response.result[0] },
        { name: "Mantenimientos", data: response.result[1] },
        { name: "Certificados", data: response.result[2] },
        { name: "Records", data: response.result[3] },
      ]);
      getOptions(response.result[4]);
    }
  };

  const getOptions = async (maximo) => {
    setOptions({
      chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
      colors: ["#556ee6", "#34c38f", "#f46a6a", "#f1b44c"],
      dataLabels: { enabled: !0 },
      stroke: { width: [3, 3], curve: "straight" },
      title: { text: "Acumulado por mes", align: "left" },
      grid: {
        row: { colors: ["transparent", "transparent"], opacity: 0.2 },
        borderColor: "#f1f1f1",
      },
      markers: { style: "inverted", size: 6 },
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
        title: { text: "Mes" },
      },
      yaxis: { title: { text: "Acumulado" }, min: 0, max: maximo },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: !0,
        offsetY: -25,
        offsetX: -5,
      },
      responsive: [
        {
          breakpoint: 600,
          options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
        },
      ],
    });
  };

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="370"
      />
    </React.Fragment>
  );
};

export default ChartApex;
