import React, { useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";
import RatingTooltip from "react-rating-tooltip";
import API from "../../api/dashboard/tools";

const ToolsIndicatorsMonth = (props) => {
    const [newtool, setNewtool] = React.useState(0);
    const [newhv, setNewhv] = React.useState(0);
    const [deltool, setDeltool] = React.useState(0);
    const [updtool, setUpdtool] = React.useState(0);
  
    useEffect(() => {
      getIndicators();
    }, []);
  
    const getIndicators = async () => {
      const responseUser = await API.getIndicatorsMonth();
      if (responseUser.ok) {
        setNewtool(responseUser.result[0]);
        setNewhv(responseUser.result[1]);
        setDeltool(responseUser.result[2]);
        setUpdtool(responseUser.result[3]);
      }
    };

  return (
    <React.Fragment>
      <Row>
        <Col sm="3">
          <Card className="mini-stats-wid">
            <CardBody>
              <Media>
                <div className="mr-3 align-self-center">
                  <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                </div>
                <Media body>
                  <p className="text-muted mb-2">
                    Nueva herramienta mes actual
                  </p>
                  <h5 className="mb-0"> {newtool} </h5>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card className="mini-stats-wid">
            <CardBody>
              <Media>
                <div className="mr-3 align-self-center">
                  <i className="mdi mdi-truck-fast-outline h2 text-info mb-0" />
                </div>
                <Media body>
                  <p className="text-muted mb-2">
                    Nuevas hojas vida mes
                  </p>
                  <h5 className="mb-0"> {newhv} </h5>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card className="mini-stats-wid">
            <CardBody>
              <Media>
                <div className="mr-3 align-self-center">
                  <i className="mdi mdi-star-outline h2 text-info mb-0" />
                </div>
                <Media body>
                  <p className="text-muted mb-2">Mod Inventario mes</p>
                  <h5 className="mb-0"> {updtool} </h5>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col sm="3">
          <Card className="mini-stats-wid">
            <CardBody>
              <Media>
                <div className="mr-3 align-self-center">
                  <i className="mdi mdi-star-outline h2 text-info mb-0" />
                </div>
                <Media body>
                  <p className="text-muted mb-2">
                    Baja herramientas mes
                  </p>
                  <h5 className="mb-0"> {deltool} </h5>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ToolsIndicatorsMonth;
