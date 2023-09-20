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

import BarChartStatus from "../../components/AllCharts/apex/barchartStatus";
import BarChartCardType from "../../components/AllCharts/apex/barchartCARDType";
import BarChartCardItems from "../../components/AllCharts/apex/barchartCARDItems";
import TableUsers from "../../components/Tables/TableUsers";

const DashCards = (props) => {
  return (
    <>
      <BaseView>
        {/* Aqui van los dash de Tarjeta naranja */}
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">
                  DASHBOARD INDICADORES TARJETAS
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
      </BaseView>
    </>
  );
};

export default DashCards;
