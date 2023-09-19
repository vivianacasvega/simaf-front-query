import React, { useEffect } from "react";
//import API from "../../api/dashboard/pend";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import SimpleBar from "simplebar-react";
import { getItem } from "../../utils/index";
import { Link } from "react-router-dom";


const TableUsersControl = (props) => {
  const [mant, setMant] = React.useState([]);

  useEffect(() => {
    //getMant();
  }, []);

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
      <Card>
        <CardBody>
          <CardTitle>Tarjetas no gestionadas por usuario </CardTitle>
          <div className="table-rep-plugin">
            <SimpleBar style={{ height: "250px", width: "100%" }}>
              <div className="table-responsive">
                <Table className="table mb-0 table-hover">
                  <thead>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-11">Name</p></th>
                      <th><p className="text-muted mb-0 font-size-11">Email</p></th>
                      <th><p className="text-muted mb-0 font-size-11">T.No Gestion</p></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
                    </tr>
                    <tr>
                      <th><p className="text-muted mb-0 font-size-10">Eduardo Andres Funes</p></th>
                      <td><p className="text-muted mb-0 font-size-10">eaf1980@gmail.com</p></td>
                      <td><p className="text-muted mb-0 font-size-10">12</p></td>
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

export default TableUsersControl;
