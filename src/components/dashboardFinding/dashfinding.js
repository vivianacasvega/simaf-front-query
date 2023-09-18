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
import BaseView from '../../components/utils/BaseView';

import { getItem } from "../../utils/index";
import GeneralTable from "../parameterization/general/GeneralTable";

import LineApexChart from "../AllCharts/apex/chartapex";
import RadialChartTools from "../AllCharts/apex/RadialChart_tools";
import RadialChartMant from "../AllCharts/apex/RadialChart_mant";
import RadialChartWorks from "../AllCharts/apex/RadialChart_works";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import BarChart from "../AllCharts/apex/barchart";

const DashFinding = (props) => {
  return (
    <>
      <BaseView>
        {/* Aqui van los dash de de hallazgos */}
        <Row>

        </Row>
      </BaseView >
    </>
  );
};

export default DashFinding;
