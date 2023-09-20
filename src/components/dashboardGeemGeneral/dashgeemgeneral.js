import React, { useEffect } from "react";
import {
  Col,
  Row,
  CardBody,
  Card,
  CardTitle,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import BaseView from '../../components/utils/BaseView';
import classnames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import API from "../../api";

import { getItem } from "../../utils/index";
import GeneralTable from "../parameterization/general/GeneralTable";

import LineApexChart from "../AllCharts/apex/chartapex";
import RadialChartTools from "../AllCharts/apex/RadialChart_tools";
import RadialChartMant from "../AllCharts/apex/RadialChart_mant";
import RadialChartWorks from "../AllCharts/apex/RadialChart_works";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import BarChart from "../AllCharts/apex/barchart";

import IndicatorsMonth from "../dashboard/IndicatorsMonts";

import ChartApexGeem from "../../components/AllCharts/apex/chartapexGeem";
import PieChartGeem from "../../components/AllCharts/apex/PieChartGeem";

import BarChartStatus from "../../components/AllCharts/apex/barchartStatus";
import BarChartCardType from "../../components/AllCharts/apex/barchartCARDType";
import BarChartCardItems from "../../components/AllCharts/apex/barchartCARDItems";
import TableUsers from "../../components/Tables/TableUsers";

import FormFindIndicators from "../utils/FormFindIndicators";
import FormFindIndicatorsControl from "../utils/FormFindIndicatorsControl";
import BarChartStatusControl from "../../components/AllCharts/apex/barchartStatusControl";
import TableUsersControl from "../../components/Tables/TableUsersControl";

const DashGeemGeneral = (props) => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      {/* Aqui van los dash de PQRS */}
      <BaseView>
        {/* Pestañas */}
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">
                  Indicadores no gestión
                </CardTitle>
                <Row>
                  <Col lg={12}>
                    <BarChartStatusControl
                      type={3}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <TableUsersControl />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <BarChartStatusControl
                      type={3}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <TableUsersControl />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <BarChartStatusControl
                      type={3}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <TableUsersControl />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </BaseView>
    </>
  );
};

export default DashGeemGeneral;
