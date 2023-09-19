import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import {
  Modal,
  Table
} from "reactstrap";
//import API from "../../../api/dashboard/tools";

const BarChartStatus = (props) => {
  const [series, setSeries] = React.useState([]);
  const [options, setOptions] = React.useState({});
  const [type, setType] = React.useState(0);
  const [modal_scroll, setmodal_scroll] = React.useState(false);
  const [label, setLabel] = React.useState("");
  const [data, setData] = React.useState(0);

  useEffect(async () => {
    setType(props.type);
    getSeries();
  }, []);

  const prueba = async (id, cad, val) => {
    setLabel(cad);
    setData(val);
    tog_scroll();
  }

  function tog_scroll() {
    setmodal_scroll(!modal_scroll);
    //removeBodyCss();
  }

  const getSeries = async () => {
    //const response = await API.getToolsYear();
    if (true) {
      setSeries([
        {
          data: [1, 3, 234],
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
        events: {
          dataPointSelection(event, chartContext, config) {
            //let ID = config.xaxis.categories[0];
            //console.log("Index " + config.dataPointIndex);
            //console.log(chartContext.w.globals.labels[config.dataPointIndex]);
            prueba(config.dataPointIndex, chartContext.w.globals.labels[config.dataPointIndex], chartContext.w.config.series[0].data[config.dataPointIndex]);
          }
        }
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
          "Abiertas",
          "Pendientes",
          "Cerradas"
        ],
      },
    });
  };

  return (
    <React.Fragment>

      {/* Modal */}

      <Modal
        size="xl"
        isOpen={modal_scroll}
        toggle={() => {
          tog_scroll();
        }}
        scrollable={true}
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">
            Datos para {label} con valor {data}
          </h5>
          <button
            type="button"
            onClick={() =>
              setmodal_scroll(false)
            }
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Table className="table mb-0 table-hover">
            <thead>
              <tr>
                <th><p className="text-muted mb-0 font-size-11">Name</p></th>
                <th><p className="text-muted mb-0 font-size-11">Email</p></th>
                <th><p className="text-muted mb-0 font-size-11">T.Cre</p></th>
                <th><p className="text-muted mb-0 font-size-11">T.Asig</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
              <tr>
                <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                <td><p className="text-muted mb-0 font-size-10">12</p></td>
                <td><p className="text-muted mb-0 font-size-10">23</p></td>
              </tr>
            </tbody>
          </Table>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                setmodal_scroll(false)
              }
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height="300"
      />
    </React.Fragment>
  );
};

export default BarChartStatus;
