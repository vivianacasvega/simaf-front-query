import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchComponent from './utils/Search';


export const ComponentActions = (props) => {

  return (
    <>
      <Row className='align-items-center'>
        <Col md={4}>
          <span className='h4 mr-4'>
            {props.title}
          </span>
          <Link
            className='btn btn-success waves-effect waves-light btn-rounded w-btn'
            to={props.to}
            role='button'
          >
            Añadir
          </Link>
        </Col>
        <Col md={8} className='text-center'>
          <Row className='align-items-center'>
            <Col md={6} sm={8} xs={8}>
              <SearchComponent value={props.value} onChange={props.onChange} />
            </Col>
            <Col md={4} xs={12} className=''>
              <Button
                onClick={() => props.onClick()}
                color='warning'
                className='btn btn-success waves-effect waves-light btn-rounded w-btn'
              >
                Buscar
              </Button>
              <Button
                onClick={() => props.clear()}
                color='info'
                className='btn btn-success waves-effect waves-light btn-rounded w-btn'
              >
                Limpiar
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className={`mb-5 lw ${props.color || 'text-primary'}`} />
    </>
  )
}
