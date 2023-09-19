import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
//import API from "../../../api/dashboard/maintenances";

const ChartApexGeem = (props) => {
  const [series, setSeries] = React.useState([]);
  const [options, setOptions] = React.useState({});
  const [type, setType] = React.useState(0);

  useEffect(async () => {
    setType(props.type);
    getSeries();
  }, []);

  const getSeries = async () => {
    //const response = await API.getMantYear();
    //if (true) {
      setSeries([
        { name: "Registros", data: [23,12,45,67,8,98,33,22,11,55,77,88] },
      ]);
      getOptions(100, props.label);
    //}
  };

  const getOptions = async (maximo, l) => {
    setOptions({
      chart: { zoom: { enabled: !1 }, toolbar: { show: !1 } },
      colors: ["#f1b44c"],
      dataLabels: { enabled: !0 },
      stroke: { width: [3, 3], curve: "straight" },
      title: { text: l, align: "left" },
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
        height="300"
      />
    </React.Fragment>
  );
};

export default ChartApexGeem;
