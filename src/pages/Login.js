import React, {useEffect} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api/index';
import { setItem } from '../utils/index';

const Login = () => {
  let params = useParams();
  let navigate = useNavigate();
  const tokenAuth = params.token;

  const verifyToken = async () => {
    setItem('token', tokenAuth)
    const response = await API.Auth.verify()
    if (response.ok) {
      setItem('userId', response.result.userid)
      setItem('lastLogin', response.result.date)
      setItem('fullName', response.result.name)
      navigate('/')
    } else {
      window.location.href = 'https://www.maximfishing.solutions/';
    }
  }

  useEffect(() => {
    verifyToken()
  }, [tokenAuth])

  return (
    <React.Fragment>
      <h1>Cargando...</h1>
    </React.Fragment>
  )
}

export default Login;
