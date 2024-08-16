import React from "react";

import WebDesign from '../../assets/images/icons/graduate.png'
import FrontEnd from '../../assets/images/icons/school.png'
import Database from '../../assets/images/icons/school.png'
import TickIcon from '../../assets/images/icons/tick-mark.png'

import './services.css'

const Services = () =>{
  const services = [
    {
      name:"Master Of Science In Software Systems",
      Icon:WebDesign,
      subServices:[
        {
          name:"Kongu Engineering College"
        },
        {
          name:"2020-2025"
        }
        
      ]
    },
    {
      name:"High School Certificate",
      Icon:Database,
      subServices:[
        {
          name:"Bharathi Matric Higher Secondary School, Vijayamangalam"
        },
        {
          name:"2019-2020"
        }
      ]
    },
    {
      name:"Secondary School Leaving Certificate",
      Icon:FrontEnd,
      subServices:[
        {
          name:"Bharathi Matric Higher Secondary School, Vijayamangalam"
        },
        {
          name:"2017-2018"
        }
      ]
    }
  ]
  return(
    <div className="Services" id="Services">
      <div className="Title">
        <h1>Qualification</h1>
        <h2></h2>
      </div>
      <div className="ServicesPage">
        <div className="ServicePageConteiner">
          <ul className="ServicesElements">
            {services.map((service, i) =>
              <li key={i} >
                <span className="OpacityEffect"></span>
                <div className="ServiceHeader">
                  <div className="ServiceTittle">
                    <div>
                      <img src={service.Icon} alt={`${service.name}`} />
                    </div>
                    <p>{service.name}</p>
                  </div>
                  <div className="Sub_conteiner">
                  {service.subServices.map((subService, i) =>
                      <span key={i} className="SubServices">
                        <div>
                          <img src={WebDesign} alt={"check box"} />
                          {subService.name}
                        </div>
                      </span>
                  )}
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Services