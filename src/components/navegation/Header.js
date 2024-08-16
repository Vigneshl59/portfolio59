import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { Link } from 'react-scroll';
import { HiSun } from 'react-icons/hi';
import { FaRegMoon } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocalLaundryService } from 'react-icons/md';
import { AiFillProject } from 'react-icons/ai';
import { RiFileList3Fill, RiSendPlane2Fill, RiCloseFill } from 'react-icons/ri';

import './header.css';

const Header = (props) => {
  const navigate = useNavigate(); // Updated hook
  const [navBarBoarder, SetNavBarBorder] = useState(false);
  const [navcomponents, setNavcomponents] = useState([
    { name: "About", icon: BsFillPersonFill, linkTo: "AboutMe", id: "navLink", active: false },
    { name: "Skills", icon: RiFileList3Fill, linkTo: "Skills", id: "navLink", active: false },
    { name: "Education", icon: MdLocalLaundryService, linkTo: "Services", id: "navLink", active: false },
    { name: "Projects", icon: AiFillProject, linkTo: "Projects", id: "navLink", active: false },
    { name: "Contact", icon: RiSendPlane2Fill, linkTo: "GetInTouch", id: "navLink", active: false }
  ]);
  const [openMenu, setOpenMenu] = useState("none");

  // This function is to control what of the nav links is open to add a different color on it
  const navLinkLselected = (event) => {
    const newComponentsInstance = navcomponents.map(item => {
      if (item.name === event.target.text) {
        return { ...item, active: true, id: "activeNavLink" };
      }
      return { ...item, active: false, id: "navLink" };
    });
    setOpenMenu("none");
    setNavcomponents(newComponentsInstance);
    goToLink(event.target.text.toLowerCase());
  };

  // This is when you click on the home button it resets the nav links to default
  const unselecteAll = () => {
    const newComponentsInstance = navcomponents.map(item => ({ ...item, active: false, id: "navLink" }));
    setNavcomponents(newComponentsInstance);
    goToLink("");
  };

  // To open the Mobile navigation Menu
  const openMobileMenu = () => setOpenMenu("block");

  // To close the Mobile Menu
  const closeMobileMenu = () => setOpenMenu("none");

  const goToLink = (link) => {
    navigate(`/#${link}`); // Updated navigation method
  };

  // Control the border of the navbar on scroll
  const addNavbarBorder = () => {
    SetNavBarBorder(window.scrollY >= 40);
  };

  const onChangeTheme = () => {
    props.changeThemeHandler();
  };

  // Event listener for scroll
  window.addEventListener('scroll', addNavbarBorder);

  return (
    <div>
      <div className={navBarBoarder ? "Header HeaderBorder" : "Header"}>
        <div className="HeaderComponents">
          <div className="Username">
            <h1>
              <Link
                to={"Frontpage"}
                id="navLink"
                smooth={true}
                duration={1200}
                onClick={unselecteAll}
              >
                Vignesh
              </Link>
            </h1>
          </div>
          <div className="Links">
            <ul>
              {navcomponents.map((navItem, i) => (
                <li key={i}>
                  <Link
                    to={`${navItem.linkTo}`}
                    id={`${navItem.id}`}
                    smooth={true}
                    duration={1000}
                    onClick={navLinkLselected}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="HeaderIcon">
            {props.theme === "dark" ? (
              <HiSun className="ThemeIcon" onClick={onChangeTheme} />
            ) : (
              <FaRegMoon className="ThemeIcon" onClick={onChangeTheme} />
            )}
          </div>
        </div>
        {openMenu === "none" && (
          <TiThMenu
            className="ThemeIcon"
            id="menuIcon"
            onClick={openMobileMenu}
          />
        )}
      </div>
      <div className="MobileMenu" style={{ display: `${openMenu}` }}>
        <div>
          <RiCloseFill
            className="ThemeIcon closeIcon"
            onClick={closeMobileMenu}
          />
        </div>
        <ul>
          {navcomponents.map((navItem, i) => (
            <li key={i}>
              <Link
                to={`${navItem.linkTo}`}
                id={`${navItem.id}`}
                onClick={navLinkLselected}
                smooth={true}
                duration={1200}
              >
                <div className="MenuButton">
                  <navItem.icon id={`${navItem.id}`} alt={`${navItem.name}`} />
                  <br />
                  {navItem.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
            