import React, { useEffect } from "react"
import ReactApexChart from "react-apexcharts"
import API from '../../../api/dashboard/maintenances'

const RadialChartMant = (props) => {

      const [series, setSeries] = React.useState([0,0,0,0])
      const [options, setOptions] = React.useState({})

      useEffect(async () => {
        getSeries()
      }, []);


      const getSeries = async () => {
        const response = await API.getRadial()
        if(response.ok){
          const tot = (response.result[0]+response.result[1]+response.result[2]+response.result[3])
          setSeries([((response.result[0]*100)/tot),((response.result[1]*100)/tot), ((response.result[2]*100)/tot),((response.result[3]*100)/tot)])
          getTotals(tot)
        }
      }

      const getTotals = async (tot) => {
        setOptions({
          title: { text: "Totales", align: "left" },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: "22px",
                },
                value: {
                  fontSize: "16px",
                  formatter: function (val){
                    return ((val/100)*tot)
                  }
                },
                total: {
                  show: true,
                  label: "Total",
                  formatter: function (w) {
                    return tot;
                  },
                },
              },
            },
          },
    
          labels: ["Maquinado", "Mantenimiento", "certificados", "Records"],
          colors: ["#556ee6", "#34c38f", "#f46a6a", "#f1b44c"],
        });
      };

  
    return (
      <React.Fragment>
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height="400"
        />
      </React.Fragment>
    )
}

export default RadialChartMant
