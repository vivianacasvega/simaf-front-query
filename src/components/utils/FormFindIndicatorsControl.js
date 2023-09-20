import React, { useEffect } from "react";
//import API from "../../api/dashboard/pend";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label, 
  Button,
} from "reactstrap";
import DatePicker from "react-datepicker";
import { getItem } from "../../utils/index";
import { Link } from "react-router-dom";


const FormFindIndicatorsControl = (props) => {
  const [req, setReq] = React.useState([]);
  const [startDate, setStartDate] = React.useState(new Date('04-03-2020'));
  const [endDate, setEndDate] = React.useState(new Date('04-03-2020'));
  const [selectFrente, setselectFrente] = React.useState('Bitcoin');

  useEffect(() => {
    //getReq();
  }, []);

  /*const getReq = async (event) => {
    const res = await API.pendReq(parseInt(getItem("userId")));
    let dat = [];
    if (res.result) {
      res["result"].forEach((row) => {
        dat.push({
          id: row["id"],
          description: row["description"],
          is_prevent: row["is_prevent"],
          created: row["created"],
          date_alert: row["date_alert"],
          tools_description: row["tools_description"],
          tools_id: row["tools_id"],
        });
      });
      setReq(dat);
    }
  };*/

  return (
    <React.Fragment>
      <Form>
        <Row className="mb-4">
          <Col sm={6} className="col-xl">
            <FormGroup className="mb-3">
              <Label className="form-label">Fecha Inicio :</Label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control"
                dateFormat="d-MM-yyyy"
                placeholderText="Selecciona Fecha"
              />
            </FormGroup>
          </Col>

          <Col sm={6} className="col-xl">
            <FormGroup className="mb-3">
              <Label className="form-label">Fecha Fin :</Label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="form-control"
                dateFormat="d-MM-yyyy"
                placeholderText="Selecciona Fecha"
              />
            </FormGroup>
          </Col>

          <Col sm={6} className="col-xl align-self-end">
            <div className="mb-3">
              <Button
                type="button"
                color="primary"
                className="w-md"
              //onClick={() => handleFilter()}
              >
                Filter
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default FormFindIndicatorsControl;
