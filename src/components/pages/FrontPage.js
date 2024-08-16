import React from 'react';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare, FaEnvelope } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import { BiMouse } from 'react-icons/bi';

import ProfileImage from '../../assets/images/111.png';
import './frontPage.css';

const FrontPage = () => {
  const contactIcons = [
    {
      name: "Linkedin",
      Icon: FaLinkedin,
      linkTo: "https://www.linkedin.com/in/vigneshl59/",
    },
    {
      name: "Github",
      Icon: FaGithubSquare,
      linkTo: "https://github.com/Vigneshl59",
    },
    {
      name: "Gmail",
      Icon: FaEnvelope,
      linkTo: "mailto:vigneshloganathan59@gmail.com",
    }
  ];

  return (
    <div className="Frontpage" id="Frontpage">
      <div className="PresentationComponents">
        <h1>Hello, I'm Vignesh</h1>
        <div className="secondHeader"><h2>Web Developer</h2></div>
        <div className="PresentationText">
          <p>full fleged with Frontend Designer</p>
          <h3>UI/UX , Reactjs</h3>
        </div>
        <div className="ContactMe">
          <Link to={"GetInTouch"} smooth={true} duration={1000}>
            <button id="contactButton">
              Contact Me
              <MdArrowForward className="ForwardIcon-2"/>
            </button>
          </Link>
        </div>
      </div>
      <div className="FrontAnimation">
        <span id="primaryLosangle">
          <img src={ProfileImage} alt="profile" className="ProfileImage"/>
        </span>
        <span id="secondLosangle"></span>
        <span id="thertLosangle"></span>
      </div>
      <div className="Contacts">
        <ul>
          {contactIcons.map((icon, i) => (
            <li key={i}>
              <a href={`${icon.linkTo}`}>
                <icon.Icon id="contactIcons"/>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="ScrollShow">
        <Link to="AboutMe" smooth={true} duration={1000}>
          <p>
            <BiMouse id="iconScroll"/>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
