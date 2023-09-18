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
import API from "../../api/dashboard/maintenances";

const MantIndicatorsMonth = (props) => {
  const [otm, setOtm] = React.useState(0);
  const [mant, setMant] = React.useState(0);
  const [cert, setCert] = React.useState(0);
  const [rec, setRec] = React.useState(0);

  useEffect(() => {
    getIndicators();
  }, []);

  const getIndicators = async () => {
    const responseUser = await API.getIndicatorsMonth();
    if (responseUser.ok) {
      setOtm(responseUser.result[0]);
      setMant(responseUser.result[1]);
      setCert(responseUser.result[2]);
      setRec(responseUser.result[3]);
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
                  <p className="text-muted mb-2">Mantenimientos mes</p>
                  <h5 className="mb-0"> {otm} </h5>
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
                  <p className="text-muted mb-2">Records mes</p>
                  <h5 className="mb-0"> {mant} </h5>
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
                  <p className="text-muted mb-2">Maquinados mes</p>
                  <h5 className="mb-0"> {cert} </h5>
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
                    Certificados mes
                  </p>
                  <h5 className="mb-0"> {rec} </h5>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MantIndicatorsMonth;
