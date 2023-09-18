import React, {useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  CardTitle
} from "reactstrap";

import API from '../../api/dashboard/general'

const General = (props) => {
  
  const [users, setUsers] = React.useState(0);
  const [tools, setTools] = React.useState(0);
  const [lservices, setLservices] = React.useState(0);
  const [companies, setCompanies] = React.useState(0);
  const [categories, setCategories] = React.useState(0);
  const [locations, setLocations] = React.useState(0);
  const [pieces, setPieces] = React.useState(0);

  useEffect(() => {
    getData()
  },[props]);

  const getData = async () => {
        const responseUser = await API.getGeneralInfo()
        if(responseUser.ok){
          setUsers(responseUser.result[0])
          setTools(responseUser.result[1])
          setLservices(responseUser.result[2])
          setCompanies(responseUser.result[3])
          setCategories(responseUser.result[4])
          setLocations(responseUser.result[5])
          setPieces(responseUser.result[6])
        }
  }

  return (
    <React.Fragment>
      <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="mb-4">Información General de Registros</CardTitle>

              <Row>
                <Col sm="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <div className="mr-3 align-self-center">
                          <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                        </div>
                        <Media body>
                          <p className="text-muted mb-2">Usuarios</p>
                          <h5 className="mb-0"> {users} </h5>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <div className="mr-3 align-self-center">
                          <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                        </div>
                        <Media body>
                          <p className="text-muted mb-2">Empresas</p>
                          <h5 className="mb-0">{companies} </h5>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <div className="mr-3 align-self-center">
                          <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                        </div>
                        <Media body>
                          <p className="text-muted mb-2">Herramientas</p>
                          <h5 className="mb-0">{tools} </h5>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <div className="mr-3 align-self-center">
                          <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                        </div>
                        <Media body>
                          <p className="text-muted mb-2">Lineas de Servicio</p>
                          <h5 className="mb-0">{lservices} </h5>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <div className="mr-3 align-self-center">
                          <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                        </div>
                        <Media body>
                          <p className="text-muted mb-2">Categorias</p>
                          <h5 className="mb-0">{categories} </h5>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <div className="mr-3 align-self-center">
                          <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                        </div>
                        <Media body>
                          <p className="text-muted mb-2">Locaciones</p>
                          <h5 className="mb-0">{locations} </h5>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm="4">
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <Media>
                        <div className="mr-3 align-self-center">
                          <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                        </div>
                        <Media body>
                          <p className="text-muted mb-2">Piezas</p>
                          <h5 className="mb-0">{pieces} </h5>
                        </Media>
                      </Media>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
    </React.Fragment>
  );
};

export default General;
