import React, { useEffect } from "react"
import ReactApexChart from "react-apexcharts"

const PieChartGeem = (props) => {
  const [text, setText] = React.useState("");
  const [opt, setOpt] = React.useState(0);
  const [opt2, setOpt2] = React.useState(0);

  useEffect(async () => {
    setOpt(props.opt);
    setOpt2(props.opt2);
    getText(props.opt, props.opt2);
  }, []);

  const getText = async (opt,opt2) => {
    if(opt == 1){
      if(opt2 ==1) setText("PQRS creadas por tipos");
      if(opt2 ==2) setText("PQRS creadas por areas");
      if(opt2 ==3) setText("PQRS asignadas por areas");
    }else{
      if(opt2 ==1) setText("PSNC creadas por tipos");
      if(opt2 ==2) setText("PSNC creadas por areas");
      if(opt2 ==3) setText("PSNC asignadas por areas");
    }
  }
  
  const series = [44, 55, 41, 17, 15,45,102,2]
  const options = {
    chart: {
      height: 300,
      type: 'pie',
    },
    title: {
      text: text,
      align: "left"
    },
    series: [44, 55, 41, 17, 15],
    colors: ['#FFA233', '#FFC133', '#FFDD33', '#FFAF33', '#FF9033'],
    legend: {
      show: false,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
    },
    responsive: [{
      breakpoint: 400,
      options: {
        chart: {
          height: 200
        },
        legend: {
          show: true
        },
      }
    }]
  }

  return (
    <ReactApexChart options={options} series={series} type="pie" height="280" />
  )
}

export default PieChartGeem
