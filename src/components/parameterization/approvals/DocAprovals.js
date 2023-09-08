import React, { useEffect, useState } from 'react'
import API from '../../../api';
import UpdateAprovals from './UpdateAprovals';
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


const DocAprovals = (props) => {
  const [mostrar, setMostrar] = useState("");
  const [lines, setLines] = useState([]);
  const [entity, setEntity] = useState({});
  const [err, setError] = useState(false);
  const [merror, setMerror] = useState("");
  const [us, setUs] = useState("");
  const [est, setEst] = useState("");
  const [doctype, setDoctype] = useState("");
  const [year, setYear] = useState("");
  const [sec, setSec] = useState("");
  const [number, setNumber] = useState("");
  const [aprueba, setAprueba] = useState("");
  const [docdate, setDocdate] = useState("");
  const [area, setArea] = useState("");
  const [inputObs, setInputObs] = useState("");
  const [fechaDoc, setFechaDoc] = useState("");
  const [fSolicitud, setfSolicitud] = useState("");


  useEffect(() => {
    getDoc(props.year,props.doc,props.sec,props.number);   
  }, [props]);

  const handleInputChange = (event) => {
    setInputObs(event.target.value);
  };

  const getDoc = async (year, doc, sec, number) => {
    try{
      setMostrar(false);
      const res = await API.ExtApprovals.getdoc({
        year: year,
        doc: doc,
        sec: sec,
        number: number
      })
      if(res.ok){
        setLines(res.data["Entity"]["Lines"]);
        setEntity(res.data["Entity"]);
        setUs(getItem("userId"));
        setEst(res.data["Entity"]['Status'].Code);
        setDoctype(res.data["Entity"]["DocumentKey"].DocTypeAbbrev);
        console.log(res.data["Entity"]["Lines"]);
        // set campos para el update
        setYear(res.data["Entity"]["DocumentKey"].FiscalYear)
        setSec(res.data["Entity"]["DocumentKey"].SectionCode)
        setNumber(res.data["Entity"]["DocumentKey"].Number)
        setAprueba(props.aprueba)
        setArea(props.area)
        setfSolicitud(props.fSolicitud)
        
        setMostrar(true);
      }else{
        setError(!err);
        setMerror("La consulta esta vacia");
      }
    }catch(error){
      console.log(error);
      setMerror("Ocurrio un error General");
      setError(!err);
    }finally{
    }
  }

  const findCamposA = (dataAdditionalFields, nombreCampo) => {
    const data = dataAdditionalFields.find((e)=> e.FieldName === nombreCampo);
    let valor = 'N/A';
    if(data.FieldValue != null && data.FieldValue != ''){
      valor = data.FieldValue;
    }
    return valor;
  } 

  const outSetMostrar = (mostrar) => {
    setMostrar(mostrar);
    props.outSetMostrar(mostrar);
  }

  return (
    <>
        <Col lg={12}>
        <Card>
          <CardBody>
          <div className="table-responsive">
              <Table className="table-nowrap">
                <tbody className='carBodyDesgloseRQ'>
                <tr>
                    <th scope="row">Documento:</th>
                    <td>{props.codigo}</td>
                  </tr>
                  <tr>
                    <th scope="row">Solicita:</th>
                    <td>{props.solicita.slice(0, props.solicita.lastIndexOf(" ")+1)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Area:</th>
                    <td>{props.area}</td>
                  </tr>
                  <tr>
                    <th scope="row">Aprueba:</th>
                    <td>{props.aprueba.slice(0, props.solicita.lastIndexOf(" ")+1)}</td>
                  </tr>
                  <tr>
                    <th scope="row">Fecha Solicitud:</th>
                    <td>{props.fSolicitud}</td>
                  </tr>
                  <tr>
                    <th scope="row">Observaciones:</th>
                    <td>{props.obs}</td>
                  </tr>
                  <tr>
                    <th scope="row">Obs. Aprobación:</th>
                    <td>
                    <Input
                      type="text"
                      value={inputObs}
                      onChange={handleInputChange}
                      className="form-control"
                      id="horizontal-firstname-Input"
                      placeholder=""
                    />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <>
              {err && (
                <p color="red">{merror}</p>
              )}

              {/* tabla de desglose */}
            <div className="table-responsive">
              <Table className="table mb-0 carBodyTableDesgloseRQ">
                <thead className="table-warning">    
                  <tr>
                    <th>Cod Articulo</th>
                    <th>Descripción</th>
                    <th>C.Costos</th>
                    <th>Equipo</th>
                    <th>Cantidad</th>
                    <th>V.Unitario</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                {lines.map((d) => (
                  <tr key={d.LineNumber} >
                    <td>{d.ItemCode}</td>
                    <td>{d.Description}</td>
                    <td>
                      { findCamposA(d.AdditionalFields, 'CA_Campo03') }  </td>
                    <td>{ findCamposA(d.AdditionalFields, 'CA_Campo04') } </td>     
                    <td>{d.Quantity}</td>
                    <td>{d.UnitPriceExcludedVAT.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                    <td>{d.LiquidValue.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>                   
                  </tr>
                ))}   

                </tbody>   
                
              </Table>
              <div
               className='text-right'>Total con IVA: {entity.TotalValue} 
              </div>  
              {mostrar && (
                <UpdateAprovals
                 us = {us}
                 est = {est}
                 doctype = {doctype}

                 //props para el update
                 year = {year}
                 sec = {sec}
                 number = {number}  
                 aprueba = {aprueba}
                 obs = {inputObs}
                 lines = {lines}
                 mostrar = {mostrar}
                 fSolicitud = {fSolicitud}


                 outSetMostrar={outSetMostrar}  
                />
              )} 
              </div>        
              </>
          </CardBody>
        </Card>
     </Col>
    </>
  )
}

export default DocAprovals
