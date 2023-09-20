import React, { useEffect } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import BaseView from '../../components/utils/BaseView';

import ToolsIndicatorsMonth from "../dashboard/toolsmonthindicators";
import WorksIndicatorsMonth from "../dashboard/worksmonthindicators";
import MantIndicatorsMonth from "../dashboard/mantmonthindicators";
import LineApexChart from "../AllCharts/apex/chartapex";
import RadialChartTools from "../AllCharts/apex/RadialChart_tools";
import RadialChartMant from "../AllCharts/apex/RadialChart_mant";
import RadialChartWorks from "../AllCharts/apex/RadialChart_works";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import BarChart from "../AllCharts/apex/barchart";

const DashCVTOOLS = (props) => {
  return (
    <>
      <BaseView>
        {/* Indicadores mantenimiento gerenciales */}
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">
                  Mantenimientos Acumulados
                </CardTitle>
                <MantIndicatorsMonth />
                <Row>
                  <Col lg={6}>
                    <LineApexChart />
                  </Col>
                  <Col lg={6}>
                    <RadialChartMant
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Indicadores Toolstrings y trabajos realizados */}
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">
                  Indicadores Operativos
                </CardTitle>
                <Row>
                  <WorksIndicatorsMonth />
                </Row>
                <Row>
                  <Col lg={6}>
                    <ColumnWithDataLabels />
                  </Col>
                  <Col lg={6}>
                    <RadialChartWorks />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Indicadores Inventario */}
        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <CardTitle className="mb-4">
                  Indicadores Hojas de Vida
                </CardTitle>
                <ToolsIndicatorsMonth />
                <Row>
                  <Col lg={6}>
                    <BarChart />
                  </Col>
                  <Col lg={6}>
                    <RadialChartTools
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

export default DashCVTOOLS;
