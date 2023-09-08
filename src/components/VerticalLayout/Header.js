import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-maxim.png"
import LogoSm from '../../assets/images/logo-sm-maxim.jpg'
import ProfileMenu from './ProfileMenu';
import { useState } from 'react';
import Navbar from '../VerticalLayout/Navbar';
import classname from "classnames";
import { Row, Col, Collapse } from "reactstrap";



const Header = (props) => {
  const [isToggle, setIsToggle] = React.useState(false)
  const [menu, setMenu] = useState(false);
  //nuevas importaciones
  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);

  const changeToggle = () => {
    if (isToggle) {
      if (document.body) {
        document.body.classList.remove('sidebar-enable')
        document.body.classList.remove('horizontal-collpsed')
      }
    } else {
      if (document.body) {
        document.body.classList.add('sidebar-enable')
        document.body.classList.add('horizontal-collpsed')
      }
    }
    setIsToggle(!isToggle)
  }

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <React.Fragment >
      <header id="page-topbar" style={{ background: '#ffffff' }}>
        <div className="navbar-header">
          <div className="d-flex">

            <div className="navbar-brand-box p-0">
              <Link to="/" className="logo">
                <span className="logo-sm align-center">
                  <img src={LogoSm} height="50" />
                </span>
                <span className="logo-lg">
                  <img src={Logo} height="50" />
                </span>
              </Link>
            </div>
            {/* <button
              type="button"
              onClick={() => changeToggle()}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button> */}
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 d-lg-none header-item"
              onClick={toggleMenu}
              data-target="#topnav-menu-content"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
          </div>
          <div className='d-flex'>
            <ProfileMenu />
          </div>
        </div>
        {/* Renderiza el menú si el estado 'menu' es true */}
        {menu && (
          <div className="menu-container">
            {/* Agrega aquí el contenido de tu menú */}
            <ul>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle arrow-none"
                  onClick={e => {
                    e.preventDefault();
                    setdashboard(!dashboard);
                  }}
                  to="/dashboard"
                >
                  <i className="bx bx-home-circle me-2 mr-2 ml-4"></i>
                  Inicio  <div className="arrow-down"></div>
                </Link>
                <div
                  className={classname("dropdown-menu", { show: dashboard })}
                >
                  <Link to="/dashboard" className="dropdown-item">
                    Link 1
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/#"
                  onClick={e => {
                    e.preventDefault();
                    setapp(!app);
                  }}
                  className="nav-link dropdown-togglez arrow-none"
                >
                  <i className="bx bx-customize me-2 mr-2 ml-4"></i>
                  Prueba 1  <div className="arrow-down"></div>
                </Link>
                <div className={classname("dropdown-menu", { show: app })}>
                  <div className="dropdown">
                    <Link
                      to="/#"
                      className="dropdown-item dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault();
                        setemail(!email);
                      }}
                    >
                      Link 2
                    </Link>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="/#"
                      className="dropdown-item dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault();
                        setecommerce(!ecommerce);
                      }}
                    >
                      Link 3
                      {" "}
                      <div className="arrow-down ml-2"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: ecommerce,
                      })}
                    >
                      <Link to="/ecommerce-products" className="dropdown-item">

                      </Link>
                      <Link
                        to="/ecommerce-product-detail/1"
                        className="dropdown-item"
                      >
                        SubLInk 4
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle arrow-none"
                  to="/#"
                  onClick={e => {
                    e.preventDefault();
                    setextra(!extra);
                  }}
                >
                  <i className="bx bx-file me-2 mr-2 ml-4"></i>
                  Prueba 2<div className="arrow-down"></div>
                </Link>
                <div className={classname("dropdown-menu", { show: extra })}>
                  <div className="dropdown">
                    <Link
                      to="/#"
                      className="dropdown-item dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault();
                        setinvoice(!invoice);
                      }}
                    >
                      Link 3 <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", {
                        show: invoice,
                      })}
                    >
                      <Link to="/invoices-list" className="dropdown-item">
                        SubLInk 5
                      </Link>
                      <Link to="/invoices-detail" className="dropdown-item">
                        SubLInk 6
                      </Link>
                    </div>
                  </div>
                  <div className="dropdown">
                    <Link
                      to="/#"
                      className="dropdown-item dropdown-toggle arrow-none"
                      onClick={e => {
                        e.preventDefault();
                        setauth(!auth);
                      }}
                    >
                      {" "}
                      Link 4 <div className="arrow-down"></div>
                    </Link>
                    <div
                      className={classname("dropdown-menu", { show: auth })}
                    >
                      <Link to="/pages-login" className="dropdown-item">
                        SubLink 7
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>
    </React.Fragment>
  )
}

export default Header
