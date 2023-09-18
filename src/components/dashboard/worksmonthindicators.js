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
import API from "../../api/dashboard/works";

const WorksIndicatorsMonth = (props) => {
  const [tst, setTst] = React.useState(0);
  const [sist, setSist] = React.useState(0);
  const [elec, setElec] = React.useState(0);
  const [sin, setSin] = React.useState(0);

  useEffect(() => {
    getIndicators();
  }, []);

  const getIndicators = async () => {
    const responseUser = await API.getIndicatorsMonth();
    if (responseUser.ok) {
      setTst(responseUser.result[0]);
      setSist(responseUser.result[1]);
      setElec(responseUser.result[2]);
      setSin(responseUser.result[3]);
    }
  };

  return (
    <React.Fragment>
      <Col sm="3">
        <Card className="mini-stats-wid">
          <CardBody>
            <Media>
              <div className="mr-3 align-self-center">
                <i className="mdi mdi-pencil-lock-outline h2 text-primary mb-0" />
              </div>
              <Media body>
                <p className="text-muted mb-2">
                  Trabajos Toolstrigns mes
                </p>
                <h5 className="mb-0"> {tst} </h5>
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
                  Trabajos Mant.Sistemas mes
                </p>
                <h5 className="mb-0"> {sist} </h5>
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
                  Trabajos Electromecanica mes
                </p>
                <h5 className="mb-0"> {elec} </h5>
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
                  Trabajos S. Industrial mes
                </p>
                <h5 className="mb-0"> {sin} </h5>
              </Media>
            </Media>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default WorksIndicatorsMonth;
