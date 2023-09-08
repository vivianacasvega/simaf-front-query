import React, { useState } from 'react'
import { DateTable } from '../../utils/ComponentTable';
import PaginationComponent from '../../utils/Pagination'
import API from '../../../api';

import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col, 
  Button
} from 'reactstrap'


const ApprovalsTableQuery = () => {
  
  const [selectedData, setSelectedData] = useState(null);

  const data = [
    { id: 'RQD-5121', anio: '2023', proyecto: 'SEC1', numero: 5121, documento: 'RQ', proveedor: 'ABC Plantas y equipos', solicita:'KAREN DAYANA GUZMAN GARCIA 1007186029', aprueba: 'SERGIO JOSE ROA CULMA 7689759',
   fSolicitud: '24/04/2023 - 10:16:28', observaciones: 'TRANSPORTE PERSONAL OP ECP HUILA', codArticulo: 'RPT-HDL-31', descrip: 'VALVULA AGUJA 1/2 NPT X 10000 PSI', ccostos: 'NA', pozo: 'NA', cant: '5',
    vrun: 190.000, total: '1.000.000' },
    { id: 'RQD-5145', anio: '2023', proyecto: 'SEC1', numero: 5145, documento: 'RQ', proveedor: 'ABC Plantas y equipos', solicita:'ALBA YANETH DE LA HOZ ESCOBAR 1075245220', aprueba: 'SERGIO JOSE ROA CULMA 7689759',
    fSolicitud: '24/04/2023 - 10:16:28', observaciones: 'TRANSPORTE PERSONAL OP ECP HUILA', codArticulo: 'RPT-HDL-41', descrip: 'VALVULA AGUJA 1/2 NPT X 10000 PSI', ccostos: 'NA', pozo: 'NA', cant: '5',
     vrun: 190.000, total: '1.000.000' },
    { id: 'RQ-6060', anio: '2023', proyecto: 'SEC1', numero: 6060, documento: 'RQ', proveedor: 'ABC Plantas y equipos', solicita:'KAREN DAYANA GUZMAN GARCIA 1007186029', aprueba: 'SERGIO JOSE ROA CULMA 7689759',
    fSolicitud: '24/04/2023 - 10:16:28', observaciones: 'TRANSPORTE PERSONAL OP ECP HUILA', codArticulo: 'RPT-HDL-38', descrip: 'VALVULA AGUJA 1/2 NPT X 10000 PSI', ccostos: 'NA', pozo: 'NA', cant: '5',
     vrun: 190.000, total: '1.000.000' },
    { id: 'RQD-8952', anio: '2023', proyecto: 'SEC1', numero: 8952, documento: 'RQ', proveedor: 'ABC Plantas y equipos', solicita:'DAYANA GUZMAN GARCIA 1007186029-PEND', aprueba: 'SERGIO JOSE ROA CULMA 7689759',
    fSolicitud: '24/04/2023 - 10:16:28', observaciones: 'TRANSPORTE PERSONAL OP ECP HUILA', codArticulo: 'RPT-HDL-38', descrip: 'VALVULA AGUJA 1/2 NPT X 10000 PSI', ccostos: 'NA', pozo: 'NA', cant: '5',
     vrun: 190.000, total: '1.000.000' },
    { id: 'RQ-2321', anio: '2023', proyecto: 'SEC1', numero: 2321, documento: 'RQ', proveedor: 'ABC Plantas y equipos', solicita:'ALBA YANETH DE LA HOZ ESCOBAR 1075245220', aprueba: 'SERGIO JOSE ROA CULMA 7689759',
    fSolicitud: '24/04/2023 - 10:16:28', observaciones: 'TRANSPORTE PERSONAL OP ECP HUILA', codArticulo: 'RPT-HDL-38', descrip: 'VALVULA AGUJA 1/2 NPT X 10000 PSI', ccostos: 'NA', pozo: 'NA', cant: '5', 
    vrun: 190.000, total: '1.000.000' },
    { id: 'RQD-4218', anio: '2023', proyecto: 'SEC1', numero: 4218, documento: 'RQ', proveedor: 'ABC Plantas y equipos', solicita:'KAREN GUZMAN GARCIA 1007186029', aprueba: 'SERGIO JOSE ROA CULMA 7689759',
    fSolicitud: '24/04/2023 - 10:16:28', observaciones: 'TRANSPORTE PERSONAL OP ECP HUILA', codArticulo: 'RPT-HDL-38', descrip: 'VALVULA AGUJA 1/2 NPT X 10000 PSI', ccostos: 'NA', pozo: 'NA', cant: '5', 
    vrun: 190.000, total: '1.000.000' },
    { id: 'RQD-2381', anio: '2023', proyecto: 'SEC1', numero: 2381, documento: 'RQ', proveedor: 'ABC Plantas y equipos', solicita:'YANETH DE LA HOZ ESCOBAR 1075245220', aprueba: 'SERGIO JOSE ROA CULMA 7689759',
    fSolicitud: '24/04/2023 - 10:16:28', observaciones: 'TRANSPORTE PERSONAL OP ECP HUILA', codArticulo: 'RPT-HDL-38', descrip: 'VALVULA AGUJA 1/2 NPT X 10000 PSI', ccostos: 'NA', pozo: 'NA', cant: '5',
     vrun: 190.000, total: '1.000.000' },
  ];

 
  const handleDataClick = (data) => {
    setSelectedData(data);
  } 

  const [descriptionNames, setDescriptionNames] = useState([])
  const [page, setPage] = useState(0)

  const filterByPage = async (page) => {
    const response = await API.DescriptionNames.filterByPage(page)
    if (response.result) {
      setDescriptionNames(response.result)
    } else {
      setDescriptionNames([])
    }
  }

  const handleNext = () => {
    if (descriptionNames.length === 10) {
      const pageTemp = page + 1
      setPage(pageTemp)
      filterByPage(pageTemp)
    }
  }

  const handleBack = () => {
    if (page > 0) {
      const pageTemp = page - 1
      setPage(pageTemp)
      filterByPage(pageTemp)
    }
  }

  return (
    <>
    
    <CardTitle className='mb-3'> 
      Consulta Aprobación documentos de compra 
    </CardTitle>
    <hr class="mb-4 lw text-primary"></hr>
    <Card>
      <Row >
          <Col md={3} sm={4} xs={8} className="align-self-center mb-1 mt-3">
              <form className="app-search">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar"
                    /* value={props.value}
                    onChange={(event) => {
                      props.setKey(event.target.value);
                    }} */
                  />
                  <span className="bx bx-search-alt " />
                </div>
              </form>
          </Col>
         <Col md={2} className="align-self-center" >
            <DateTable
              title="Fecha de inicio"
              /*onChange={(value) => {
                setDateInit(value);
              }}
              value={dateInit}*/
            />
          </Col>
          <Col md={2} className="align-self-center" >
            <DateTable
              title="Fecha final"
              /*onChange={(value) => {
                setDateFinish(value);
              }}
              value={dateFinish}*/
            />
          </Col>
          <Col className="align-self-center  mb-0 mt-2" md={3}>
            <Button
              color="success"
              className="mr-1 waves-effect waves-light btn-sm w-btn"
              //onClick={submit}
            >
              Buscar
            </Button>
            <Button
              color="info"
              className="mr-1 waves-effect waves-light btn-sm w-btn"
              /*onClick={() => {
                setController("");
                setDateInit();
                setDateFinish();
                setPage(0);
                filterByPage(page);
              }}*/
            >
              Limpiar
            </Button>
          </Col>
      </Row>
    </Card>     
    <Card>
      <CardBody>
        <div className="table-responsive">
          <Table className="table table-hovered text-uppercase" responsive>
            <thead className='carBodyPendientesRQ'>
              <tr  className='table-warning '>
                <th>ID</th>
                <th>USUARIO</th>
                <th>U.ETICA</th>
                <th>T.DOCUMENTO</th>
                <th>N° DOCUMENTO	</th>
                <th>FECHA</th>
                <th>COD.ESTADO</th>
              </tr>
            </thead>
            <tbody className='carBodyPendientesRQ'>
              {data.map((d) => (
                <tr key={d.id} onClick={() => handleDataClick(d)}>
                    <td>{d.id}</td>
                    <td>{d.anio}</td>
                    <td>{d.proyecto}</td>
                    <td>{d.numero}</td>
                    <td>{d.documento}</td>
                    <td>{d.proveedor}</td>
                    <td>{d.solicita}</td>
                </tr>
              ))}     
            </tbody>
          </Table>
        </div>
        <div className='pagination justify-content-end mt-4 pagination-md'>
          <PaginationComponent
            page={page}
            next={() => handleNext()}
            back={() => handleBack()}
          />
        </div>
      </CardBody>
     </Card>   
    </>
  )
}

export default ApprovalsTableQuery
