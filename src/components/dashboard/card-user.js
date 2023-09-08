import React, {useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import API from '../../api/dashboard/cardUser'

const CardUser = (props) => {
  
  const [userid, setUserid] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [updated, setUpdated] = useState("");
  const [compname, setCompname] = useState("");
  const [email, setEmail] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    getUser(props.id)
    getRate()
  },[props]);

  const getUser = async (id) => {
        const responseUser = await API.getUser(id)
        if(responseUser.ok){
          setUserid(responseUser.result[0].id)
          setFirstname(responseUser.result[0].name)
          setLastname(responseUser.result[0].lastname)
          setUpdated(responseUser.result[0].updated)
          setCompname(responseUser.result[0].company)
          setEmail(responseUser.result[0].email)
        }
  }

  /*const getRate = async (company) => {
    const responseRate = await API.getRate(company)
    if(responseRate.ok){
      setRate(responseRate.result)
    }
  }*/

  /*const getUser = async (id) => {
      setUserid(1)
      setFirstname("Eduardo")
      setLastname("Andres Funes")
      setUpdated("24-08-2022")
      setCompname("MTI COLOMBIA")
      setEmail("eaf1980@gmail.com")
  }*/

  const getRate = async (company) => {
      setRate(5)
  }

  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <div>
              <div className="mb-3 mr-3">
                <i className="mdi mdi-account-circle text-primary h1"></i>
              </div>
              <Row>
                <Col>
                  <div>
                    <h5>{firstname} {lastname}</h5>
                    <p className="text-muted mb-1">{email}</p>
                    <p className="text-muted mb-0">Id no: {userid}</p>
                    <p className="text-muted mb-0">
                      Ultima conexion: {updated}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default CardUser;
