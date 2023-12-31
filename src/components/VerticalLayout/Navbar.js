import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link } from "react-router-dom";
import classname from "classnames";


//i18n
import { withTranslation } from "react-i18next";

import { connect } from "react-redux";

const Navbar = props => {

  const [dashboard, setdashboard] = useState(false);
  const [ui, setui] = useState(false);
  const [app, setapp] = useState(false);
  const [email, setemail] = useState(false);
  const [ecommerce, setecommerce] = useState(false);
  const [crypto, setcrypto] = useState(false);
  const [project, setproject] = useState(false);
  const [task, settask] = useState(false);
  const [contact, setcontact] = useState(false);
  const [blog, setBlog] = useState(false);
  const [job, setJob] = useState(false);
  const [candidate, setCandidate] = useState(false);
  const [component, setcomponent] = useState(false);
  const [form, setform] = useState(false);
  const [table, settable] = useState(false);
  const [chart, setchart] = useState(false);
  const [icon, seticon] = useState(false);
  const [map, setmap] = useState(false);
  const [extra, setextra] = useState(false);
  const [invoice, setinvoice] = useState(false);
  const [auth, setauth] = useState(false);
  const [utility, setutility] = useState(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul = document.getElementById("navigation");
    var items = ul.getElementsByTagName("a");
    removeActivation(items);
    for (var i = 0; i < items.length; ++i) {
      if (window.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });

  const redirect = () => {
    window.location = 'https://www.maximfishing.solutions/dashboard'
  }

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;
      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        if (parent.classList.contains("active")) {
          parent.classList.remove("active");
        }
      }
    }
  };

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }


  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                   
                    to="/"
                  >
                    <i className="bx bx-home-circle me-2 mr-2"></i>
                    INICIO <div className="arrow-down"></div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={() => redirect()}
                    to="/#"
                  >
                    <i className="bx bxs-home me-2 mr-2"></i>
                    MENÚ PRINCIPAL <div className="arrow-down"></div>
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/dash-cvtools"
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <i className="bx bx-customize me-2 mr-2"></i>
                    CVTOOLS <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/dash-cvtools"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        General
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="/dash-geem-general"
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <i className="bx bx-collection me-2 mr-2"></i> {" "}
                    GEEM <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/dash-pqrs"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        PQRS 
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/dash-psnc"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        PSNC 
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/dash-tarjetas"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        TARJETAS 
                      </Link>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/dash-hallazgos"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        HALLAZGOS 
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/dash-gportal"
                  >
                    <i className="bx bx-file me-2 mr-2"></i>
                    GPORTALS<div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/dash-gportal"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        General
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/dash-parametrizacion"
                  >
                    <i className="bx bx-file me-2 mr-2"></i>
                    PARAMETRIZACION<div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <div className="dropdown">
                      <Link
                        to="/dash-parametrizacion"
                        className="dropdown-item dropdown-toggle arrow-none"
                      >
                        General
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout;
  return { leftMenu };
};

export default Navbar;
