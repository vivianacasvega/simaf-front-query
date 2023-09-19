import React, { useEffect } from "react";
//import API from "../../api/dashboard/pend";
import {
  Card,
  CardBody,
  Table,
} from "reactstrap";
import SimpleBar from "simplebar-react";
import { getItem } from "../../utils/index";
import { Link } from "react-router-dom";


const TableTask = (props) => {
  const [tasks, setTaskst] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [opt, setOpt] = React.useState(0);

  useEffect(() => {
    //getMant();
    setTitle(props.title);
    setOpt(props.opt);
  }, [props]);

  /*const getMant = async (event) => {
    const res = await API.pendMant(parseInt(getItem("userId")));
    let dat = [];
    if (res.result) {
      res["result"].forEach((row) => {
        dat.push({
          id: row["id"],
          type: row["type"],
          consecutive: row["consecutive"],
          created: row["created"],
          date_alert: row["date_alert"],
          request_description: row["request_description"],
          request_id: row["request_id"],
        });
      });
      setMant(dat);
    }
  };*/

  return (
    <React.Fragment>
      <Card style={{ height: "250px", width: "100%" }}>
        <CardBody>
          <div>
            <SimpleBar style={{ height: "350px", width: "100%" }}>
              <div className="d-flex align-items-center">
                <div className="avatar-xs mr-2">
                  <span className={" text-" + "primary" + " font-size-24"}>
                    <i className={"mdi mdi-lock-open-outline"}></i>
                  </span>
                </div>
                <h4 className="card-title mb-1">{title}</h4>
              </div>
              <div className="table-responsive">
                <Table className="table table-nowrap table-centered table-hover mb-0">
                  <tbody>
                  
                    <tr>
                      <td style={{ width: "50px" }}>
                        <i className="mdi mdi-arrow-up ml-2 text-success" />
                      </td>
                      <td>
                        <h5 className="text-truncate font-size-12 mb-1">
                          <Link to="#" className="text-dark">
                            Tipo: PQRS Consecutivo: 1
                          </Link>
                        </h5>
                        <p className="text-muted mb-0 font-size-10">Pqrs: 1 - No me atendieron bien</p>
                        <p className="text-muted mb-0 font-size-10">
                          Fecha Alerta: 2023-02-11
                        </p>
                      </td>
                      <td style={{ width: "90px" }}>
                        <div>
                          <ul className="list-inline mb-0 font-size-16">
                            <li className="list-inline-item">
                              {1 == 1 ? (
                                <Link
                                  to={"/gestionsolicitud/" + "hola"}
                                  className="btn btn-primary btn-sm"
                                >
                                  Gestionar{" "}
                                  <i className="mdi mdi-arrow-right ml-1" />
                                </Link>
                              ) : (
                                <Link
                                  to={"/resumensolicitud/" + "Hola"}
                                  className="btn btn-primary btn-sm"
                                >
                                  Gestionar{" "}
                                  <i className="mdi mdi-arrow-right ml-1" />
                                </Link>
                              )}
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                       
                  </tbody>
                </Table>
              </div>
            </SimpleBar>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default TableTask;
