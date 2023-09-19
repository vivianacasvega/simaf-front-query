import React, { useEffect } from "react";
import {
  Container,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
  CardBody,
  Card,
  Media,
  CardTitle,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import BaseView from '../../components/utils/BaseView';
import classnames from "classnames";

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

const DashPQRS = (props) => {
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
        <Col lg="12">
          <Card>
            <CardBody>
              <h4 className="card-title mb-3">DASHBOARD INDICADORES</h4>

              <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "1",
                    })}
                    onClick={() => {
                      toggleTab("1");
                    }}
                  >
                    PQRS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "2",
                    })}
                    onClick={() => {
                      toggleTab("2");
                    }}
                  >
                    PSNC
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "3",
                    })}
                    onClick={() => {
                      toggleTab("3");
                    }}
                  >
                    TARJETAS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === "4",
                    })}
                    onClick={() => {
                      toggleTab("4");
                    }}
                  >
                    CONTROL RESPONSABLES
                  </NavLink>
                </NavItem>
              </ul>

              <TabContent activeTab={activeTab} className="p-3">
                <TabPane tabId="1" id="PQRS">
                  <FormFindIndicators />
                  {/* Indicadores mantenimiento gerenciales */}
                  <Row>
                    <Col lg={12}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">
                            Indicadores PQRS
                          </CardTitle>
                          <IndicatorsMonth
                            name={"PQRS"}
                            type={1}
                          />
                          <Row>
                            <Col lg={12}>
                              <ChartApexGeem
                                label={"Acumulado por mes PQRS"}
                                type={1}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <BarChartStatus
                                type={1}
                              />
                            </Col>
                            <Col lg={6}>
                              <PieChartGeem
                                opt={1}
                                opt2={1}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <PieChartGeem
                                opt={1}
                                opt2={2}
                              />
                            </Col>
                            <Col lg={6}>
                              <PieChartGeem
                                opt={1}
                                opt2={3}
                              />
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2" id="PSNC">
                  <FormFindIndicators />
                  {/* Indicadores Toolstrings y trabajos realizados */}
                  <Row>
                    <Col lg={12}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">
                            Indicadores PSNC
                          </CardTitle>
                          <IndicatorsMonth
                            name={"PSNC"}
                            type={2}
                          />
                          <Row>
                            <Col lg={12}>
                              <ChartApexGeem
                                label={"Acumulado por mes PSNC"}
                                type={2}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <BarChartStatus
                                type={2}
                              />
                            </Col>
                            <Col lg={6}>
                              <PieChartGeem
                                opt={2}
                                opt2={1}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <PieChartGeem
                                opt={2}
                                opt2={2}
                              />
                            </Col>
                            <Col lg={6}>
                              <PieChartGeem
                                opt={2}
                                opt2={3}
                              />
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3" id="TARJETAS">
                  <FormFindIndicators />
                  <Row>
                    <Col lg={12}>
                      <Card>
                        <CardBody>
                          <CardTitle className="mb-4">
                            Indicadores Tarjetas
                          </CardTitle>
                          <IndicatorsMonth
                            name={"TARJETAS"}
                            type={3}
                          />
                          <Row>
                            <Col lg={12}>
                              <ChartApexGeem
                                label={"Acumulado por mes Tarjetas"}
                                type={3}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <BarChartStatus
                                type={3}
                              />
                            </Col>
                            <Col lg={6}>
                              <BarChartCardType />
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <BarChartCardItems />
                            </Col>
                            <Col lg={6}>
                              <TableUsers />
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4" id="CONTROL RESPONSABLES">
                  <FormFindIndicatorsControl />
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
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </BaseView>
    </>
  );
};

export default DashPQRS;
