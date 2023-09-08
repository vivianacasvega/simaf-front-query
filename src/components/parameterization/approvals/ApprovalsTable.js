import React, { useEffect, useState } from 'react'
import API from '../../../api';
import DocAprovals from './DocAprovals';
import { getItem } from '../../../utils/index'

import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Input, 
  Button
} from 'reactstrap'


const ApprovalsTable = () => {
  const [data, setData] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const [codigo, setCodigo] = useState("");
  const [year, setYear] = useState("");
  const [doc, setDoc] = useState("");
  const [sec, setSec] = useState("");
  const [number, setNumber] = useState("");
  const [solicita, setSolicita] = useState("");
  const [aprueba, setAprueba] = useState("");
  const [fSolicitud, setfSolicitud] = useState("");
  const [obs, setObs] = useState("");
  const [area, setArea] = useState("");
 
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await API.ExtApprovals.getselectbuys(getItem("userId"));
    setData(res.data["Entity"]);
  }
  
  const getCodigo = () => {
    return codigo;
  }

  const handleDataClick = (codigo, year, doc, sec, number, solicita, aprueba, area, fSolicitud, obs) => {
    // setMostrar(false);
    setYear(year);
    setDoc(doc);
    setSec(sec);
    setNumber(String(number));
    setSolicita(solicita);
    setAprueba(aprueba);
    setArea(area);
    setfSolicitud(fSolicitud);
    setObs(obs);

   
    if(codigo != getCodigo()){
      setCodigo(codigo)
      setMostrar(true);
    }
  } 

  const outSetMostrar = (mostrar) => {
    setMostrar(mostrar);
    setCodigo('');
    getData();
  }

  return (
    <>    
    <CardTitle className='mb-3'> 
      Aprobación Requisiciones  
    </CardTitle>
    <hr class="mb-4 lw text-primary"></hr>
     
      <Row>
        <Col xl={6}>
          <Card>
            <CardBody>
              <CardTitle className='mb-4'>
                Listado Requisiciones pendientes 
              </CardTitle>
                <div className="table-responsive overflowTable" >
                  <Table className="table table-hover mb-0"  >
                  <thead className='carBodyPendientesRQ'>
                      <tr>
                        <th>ID</th>
                        <th>PROVEEDOR</th>
                        <th>SOLICITA</th>
                      </tr>
                    </thead>
                    <tbody className='carBodyPendientesRQ'>
                      {data.map((d) => (
                      <tr key={d.c1} onClick={() => handleDataClick(d.c1, d.c2, d.c5, d.c3, d.c4, d.c7, d.c8, d.c9, d.c10, d.c11)}>
                    
                        <td>{d.c1}</td>
                        <td>{d.c6}</td>
                        <td>{d.c7}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        <Col lg={6}>
        <Card>
          <CardBody>
            <CardTitle className='mb-4'>
              Desglose Requisición
            </CardTitle>
            <div>
              {mostrar && (
                <DocAprovals
                  codigo = {codigo}
                  year={year}
                  doc= {doc}
                  sec = {sec}
                  number = {number}
                  solicita = {solicita}
                  aprueba = {aprueba}
                  area = {area}
                  fSolicitud = {fSolicitud}
                  obs = {obs}
                  
                  outSetMostrar={outSetMostrar}                
                />
              )}
            </div>
          </CardBody>
        </Card>
     </Col>
   </Row> 
    </>
  )
}
export default ApprovalsTable