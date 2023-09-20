import React, { useEffect } from "react";
import {
  Col,
  Row,
  CardBody,
  Card,
  CardTitle,
} from "reactstrap";
import BaseView from '../../components/utils/BaseView';

import IndicatorsMonth from "../dashboard/IndicatorsMonts";
import ChartApexGeem from "../../components/AllCharts/apex/chartapexGeem";
import PieChartGeem from "../../components/AllCharts/apex/PieChartGeem";

import BarChartStatus from "../../components/AllCharts/apex/barchartStatus";

const DashPSNC = (props) => {
  return (
    <>
      {/* Aqui van los dash de PSNC */}
      <BaseView>
        {/* Indicadores Toolstrings y trabajos realizados */}
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">
                DASHBOARD INDICADORES PSNC
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
      </BaseView>
    </>
  );
};

export default DashPSNC;
