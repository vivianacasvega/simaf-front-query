import React, { useEffect } from "react";
import {
  Container,
  Row,
} from "reactstrap";
import BaseView from '../../components/utils/BaseView';

import { getItem } from "../../utils/index";
//import ApprovalsTable from "../parameterization/approvals/ApprovalsTable"
import GeneralTable from "../parameterization/general/GeneralTable";

import LineApexChart from "../AllCharts/apex/chartapex";
import RadialChartTools from "../AllCharts/apex/RadialChart_tools";
import RadialChartMant from "../AllCharts/apex/RadialChart_mant";
import RadialChartWorks from "../AllCharts/apex/RadialChart_works";
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels";
import BarChart from "../AllCharts/apex/barchart";

const DashGeneral = (props) => {
  return (
    <>
    <BaseView>
      {/* Aqui van los dash de de parametrizacion */}
      <Row>

      </Row>
    </BaseView >
  </>
  );
};

export default DashGeneral;
