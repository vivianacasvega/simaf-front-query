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
//import API from "../../api/dashboard/tools";

const IndicatorsMonth = (props) => {
    const [created, setCreated] = React.useState(12);
    const [closed, setClosed] = React.useState(5);
    const [open, setOpen] = React.useState(2);
    const [asign, setAsign] = React.useState(1);
    const [type, setType] = React.useState(0);
    const [name, setName] = React.useState(0);
  
    useEffect(() => {
      //getIndicators();
      setType(props.type);
      setName(props.name);
    }, [props]);
  
    /*const getIndicators = async () => {
      const responseUser = await API.getIndicatorsMonth();
      if (responseUser.ok) {
        setNewtool(responseUser.result[0]);
        setNewhv(responseUser.result[1]);
        setDeltool(responseUser.result[2]);
        setUpdtool(responseUser.result[3]);
      }
    };*/

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
                    {name} Nuevas mes
                  </p>
                  <h5 className="mb-0"> {created} </h5>
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
                  <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                </div>
                <Media body>
                  <p className="text-muted mb-2">
                    {name} Cerradas mes
                  </p>
                  <h5 className="mb-0"> {closed} </h5>
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
                  <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                </div>
                <Media body>
                  <p className="text-muted mb-2">{name} Pendientes</p>
                  <h5 className="mb-0"> {open} </h5>
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
                  <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
                </div>
                <Media body>
                  <p className="text-muted mb-2">
                    {name} Asignadas mes
                  </p>
                  <h5 className="mb-0"> {asign} </h5>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default IndicatorsMonth;
