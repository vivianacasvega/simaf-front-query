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

import ToolsIndicatorsMonth from './toolsmonthindicators';
import WorksIndicatorsMonth from './worksmonthindicators';
import MantIndicatorsMonth from './mantmonthindicators';

import LineApexChart from "../AllCharts/apex/chartapex";
import RadialChartTools from "../AllCharts/apex/RadialChart_tools";
import RadialChartMant from "../AllCharts/apex/RadialChart_mant";
import RadialChartWorks from "../AllCharts/apex/RadialChart_works";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import BarChart from "../AllCharts/apex/barchart";

const Dash = (props) => {
  return (
    <>
     <Row>
      Aqui va el dash de Inicio
     </Row>
    </>
  );
};

export default Dash;
