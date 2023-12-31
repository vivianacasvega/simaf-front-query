import React, {useState} from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { getItem } from '../../utils/index';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

const ProfileMenu = () => {
  const [ismenu, setIsmenu] = useState(false);
  const name = getItem('fullName');
  const lastLoginOrigin = moment.utc(getItem('lastLogin')).utcOffset(-5).format();

  const lastLogin = moment(lastLoginOrigin).fromNow();
  const isToglge = () => setIsmenu(!ismenu);

  const redirect = () => {
    window.location = 'https://www.maximfishing.solutions/dashboard'
  }
  
  return (
    <React.Fragment>
      <Dropdown
        isOpen={ismenu}
        toggle={isToglge}
        className="d-inline-block"
      >
        <DropdownToggle
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
          tag="button"
        >
          <img
            className="rounded-circle header-profile-user"
            src={avatar}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ml-2 mr-1">
            {name}
          </span>
          <i className="mdi mdi-chevron-down d-none d-xl-inline-block"/>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem tag="a">
            <em>Última vez : {lastLogin}</em>
          </DropdownItem>
          <div className="dropdown-divider"/>
            <Link to={''} onClick={() => redirect()} className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"/>
              <span>Cerrar sesión</span>
            </Link>        
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  )
}

export default ProfileMenu;
