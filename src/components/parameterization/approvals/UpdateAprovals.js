import React, { useEffect, useState } from 'react'
import API from '../../../api';
import { getItem } from '../../../utils/index'
import { useDispatch } from 'react-redux';
import { actionSetMessageSuccess } from '../../../redux/reducers/alerts/actions'

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


 const UpdateAprovals = (props) => {
  const [lines, setLines] = useState([]);
  const [entity, setEntity] = useState({});
  const [err, setError] = useState(false);
  const [merror, setMerror] = useState("");
  const [statussign, setStatussign] = useState("");
  const [statusCancel, setStatusCancel] = useState("");
  const [updateA, setUpdateA] = useState("");
  const dispatch = useDispatch();
  const [messageDescription, setMessageDescription] = useState('')
  const [available, setAvailable] = useState(false)
  const [messageError, setMessageError] = useState('')
  
  useEffect(() => {
    returnCancel();
    returnSign(props.us, props.est, props.doctype);
    
  }, []);

 
  const returnCancel = async () => {
    const resc = await API.ExtApprovals.getreturncancel(getItem("userId"));
    setStatusCancel(resc.result.aprovstatus);
    console.log('resc',resc);
  }

  const returnSign = async (us, est, doctype) => {
    try{
      const ressign = await API.ExtApprovals.returnsign({
        'us': us,
        'est': est,
        'doctype': doctype
      })
      console.log('ressign',ressign);
      if(ressign.ok){
        
        if(ressign.result.length > 0){
          setStatussign(ressign.result[0]['statussign']);
        }
       
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

  const setMessageSuccess = (messageSuccess) => {
    dispatch(actionSetMessageSuccess(messageSuccess))
  }

    const updateCancel = async () => {
    
    try{
      const resCancel = await API.ExtApprovals.update({
        'year': props.year,
        'doc': props.doctype,
        'sec': props.sec,
        'number': (String(props.number)),
        'code': statusCancel, //'RECHA'
        'eticadatauser': props.aprueba,
        'docdate': props.fSolicitud,
        'obs': props.obs,
        'lines': props.lines
      })
      
      if(resCancel.ok){
        
        setUpdateA(resCancel.data['Entity']);
        setMessageSuccess(resCancel.message)
        props.outSetMostrar(false);
       
      }else{
        setError(!err);
        setMerror("no se ha podido modificar el documento");
      }
    }catch(error){
      console.log(error);
      setMerror("Ocurrio un error General");
      setError(!err);
    }finally{
    }
  }

  const updateAprov = async () => {
    
    try{
      const resAprov = await API.ExtGeneralDash.update({
        'year': props.year,
        'doc': props.doctype,
        'sec': props.sec,
        'number': (String(props.number)),
        'code': statussign, //'APROB',
        'eticadatauser': props.aprueba,
        'docdate': props.fSolicitud,
        'obs': props.obs,
        'lines': props.lines
      })
      
      if(resAprov.ok){
        
        setUpdateA(resAprov.data['Entity']);
        setMessageSuccess(resAprov.message)
        props.outSetMostrar(false);
       
      }else{
        setError(!err);
        setMerror("no se ha podido modificar el documento");
      }
    }catch(error){
      console.log(error);
      setMerror("Ocurrio un error General");
      setError(!err);
    }finally{
    }
  }

  const handleDataClick = (year, doc, sec, number) => {
  }
  
  const clear = () => {
    props.outSetMostrar(false); // Llama a la función para "limpiar" la prop en el componente padre
  };

  return (
    <>
        <Col lg={12}>
        <Card>
          <CardBody>         
              <Button
                onClick={() => updateAprov()}
                color="success"
                className="mr-1 waves-effect waves-light btn-sm w-btn"
              >
                Aprobar
              </Button>   
              <Button
                onClick={() => updateCancel()}
                color="danger"
                className="mr-1 waves-effect waves-light btn-sm w-btn"
              >
                Rechazar
              </Button>    
              <Button
                onClick={() => clear()}
                color="warning"
                className="mr-1 waves-effect waves-light btn-sm w-btn"
              >
                Cancelar
              </Button>   
          </CardBody>
        </Card>
     </Col>
    </>
  )
}

export default UpdateAprovals 
