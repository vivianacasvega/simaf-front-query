import React, { Component } from "react"
import { Row, Col, Card } from "reactstrap"


//Import Image
import features from "../../assets/images/crypto/img-2.png"

class CardWelcome extends Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <div>
            <Row>
              <Col lg="9" sm="8">
                <div className="p-4">
                  <h5 className="text-primary">Bienvenido de nuevo !</h5>
                  <p>GPORTALS - SUITE DE APROBACIONES MAXIM</p>

                  <div className="text-muted">
                    <p className="mb-1">
                      <i className="mdi mdi-circle-medium align-middle text-primary mr-1"/>{" "}
                      En el dashboard vera pendientes por aprobar.
                    </p>
                    <p className="mb-1">
                      <i className="mdi mdi-circle-medium align-middle text-primary mr-1"/>{" "}
                      No deje acumular aprobaciones con el fin de dar agilidad a las solicitudes.
                    </p>
                    <p className="mb-1">
                      <i className="mdi mdi-circle-medium align-middle text-primary mr-1"/>{" "}
                      Revise bien, una vez probado los cambios seran a traves de adminitraciòn.
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-circle-medium align-middle text-primary mr-1"/>{" "}
                      Recuerde no compartir su contraseña y cerra la sesiòn por seguridad
                    </p>
                    <p className="mb-0">
                     
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="3" sm="4" className="align-self-center">
                <div>
                  <img src={features} alt="" className="img-fluid d-block" />
                </div>
                
              </Col>
             
            </Row>
         
          </div>
        </Card>
           

        



       
      </React.Fragment>
      
    )
  }
}

export default CardWelcome
