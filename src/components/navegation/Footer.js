import React from 'react'
import { IoCall } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'
import { FaLinkedin, FaGithubSquare, FaEnvelope, FaInstagramSquare } from 'react-icons/fa'

import './footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterPage">
        <ul className="FooterList">
          <li>
            <div>
              <h1>Vignesh</h1>
              <h2>Web Developer</h2>
            </div>
          </li>
          <li>
            <div className="FooterContactList">
              <p>
                <IoCall className="Footer_icon" />
                <span className="Footer_info">9500653798</span>
              </p>
              <p>
                <MdEmail className="Footer_icon" />
                <span className="Footer_info">vigneshloganathan59@gmail.com</span>
              </p>
              <p>
                <TiLocation className="Footer_icon" />
                <span className="Footer_info">Erode</span>
              </p>
            </div>
          </li>
          <li>
            <div className="Footer_contact_icons">
              <a href="https://github.com/Vigneshl59">
                <FaGithubSquare className="Footer_Contact_icon" />
              </a>
              <a href="mailto:vigneshloganathan59@gmail.com">
                <FaEnvelope className="Footer_Contact_icon" />
              </a>
              <a href="https://www.linkedin.com/in/vigneshl59/">
                <FaLinkedin className="Footer_Contact_icon" />
              </a>
            </div>
          </li>
        </ul>
        <p className="Copyright">Copyright © 2024 by Vignesh</p>
      </div>
    </div>
  )
}

export default Footer
