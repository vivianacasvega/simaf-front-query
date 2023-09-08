import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Media,
  Modal,
  ModalBody,
  ModalHeader,
  Table,
  CardFooter,
  Button,
} from "reactstrap";

import CardUser from "./card-user";
import CardWelcome from "./card-welcome";
import { getItem } from "../../utils/index";
//import ApprovalsTable from "../parameterization/approvals/ApprovalsTable"
import GeneralTable from "../parameterization/general/GeneralTable";

const Dash = (props) => {
  return (
    <>
      <Row>
        <CardUser id={getItem("userId")} />
        <Col xl="8">
          {/* card welcome */}
          <CardWelcome />
        </Col>
       
      </Row>
      <Row>
        <Col xl="12">
          <GeneralTable/> 
        </Col>
      </Row>
    </>
  );
};

export default Dash;
