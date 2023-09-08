import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Row } from 'reactstrap';

const ActionsComponent = (props) => {
  let navigate = useNavigate()

  return (
    <>
      <td className='text-right'>
        <Button
          onClick={() => navigate(props.toUpdated)}
          color="success"
          className="mr-1 waves-effect waves-light btn-sm w-btn"
        >
          Actualizar
        </Button>
        {props.showActivate && (
          <>
          {props.isActive ? (
            <Button
              onClick={() => props.onClick(true)}
              color="info"
              className="mr-1 waves-effect waves-light btn-sm w-btn"
            >
              Activar
            </Button>
          ) : (
            <Button
              onClick={() => props.onClick(false)}
              color="warning"
              className="mr-1 waves-effect waves-light btn-sm w-btn"
              >
              Desactivar
            </Button>
          )}
          </>
        )}
      </td>
    </>
  )
}

export default ActionsComponent;