import React, {useEffect, useState} from "react";
import Header from "./Header"
import Sidebar from "./Sidebar"
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar";

const NavBar = (props) => {
  let location = useLocation();
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


  const toggleRightSidebar = () => {
    props.toggleRightSidebar()
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }

  useEffect(() => {
    if (props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }
    window.scrollTo(0, 0)
    let currentage = capitalizeFirstLetter(location.pathname)

    document.title =
      currentage + " Gportal Maxim"
    if (props.leftSideBarTheme) {
      props.changeSidebarTheme(props.leftSideBarTheme)
    }

    if (props.layoutWidth) {
      props.changeLayoutWidth(props.layoutWidth)
    }

    if (props.leftSideBarType) {
      props.changeSidebarType(props.leftSideBarType)
    }
    if (props.topbarTheme) {
      props.changeTopbarTheme(props.topbarTheme)
    }

    if (props.showRightSidebar) {
      toggleRightSidebar()
    }
  }, [])

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const toggleMenuCallback = () => {
    if (props.leftSideBarType === "default") {
      props.changeSidebarType("condensed", isMobile)
    } else if (props.leftSideBarType === "condensed") {
      props.changeSidebarType("default", isMobile)
    }
  }
  return (
    <React.Fragment>
      <div id="preloader">
        <div id="status">
          <div className="spinner-chase">
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
            <div className="chase-dot"></div>
          </div>
        </div>
      </div>

      <div id="layout-wrapper">
        <Header
          toggleMenuCallback={toggleMenuCallback}
          toggleRightSidebar={toggleRightSidebar}
        />
        
        <Navbar menuOpen={isMenuOpened} />
        <div className="main-content">{props.children}</div>
          
      </div>
    </React.Fragment>
  )
}
export default NavBar;
