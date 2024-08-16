import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { Button, Link } from 'react-scroll';

import Header from './components/navegation/Header';
import Footer from './components/navegation/Footer';
import PersonalLogo from './assets/images/personal.png';

// The pages
import FrontPage from './components/pages/FrontPage';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Services from './components/pages/Services';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
import Publicity from "./components/pages/Publicity";

// Projects images
import Machine from './assets/images/painel/machine.png';
import Bus from './assets/images/painel/bus1.jpeg';
import Portfolio1 from './assets/images/painel/port.png';
import Food_app from './assets/images/painel/food.png';
import Games from './assets/images/painel/games.png';
import Portfolio from './assets/images/painel/portfolio.png';
import Guess_the_num from './assets/images/painel/guess.jpg';
import ecommerce from './assets/images/painel/ecom.png';
import CasaCelestina from './assets/images/painel/casacelestina.png';

import './App.css';

function App() {
  const navigate = useNavigate(); // Updated to useNavigate
  const [showPersonalLogo, setShowPersonalLogo] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [personal_projects] = useState([
    {
      name: "Knit Stich",
      image: Machine ,
      desc: "Its about the Admin Stock Maitanace Website with using of all the products. ",
      link: "https://github.com/Vigneshl59/Knit-stich"
    },
    {
      name: "Vehicle Mangement",
      image: Bus,
      desc: "Its about the KEC transport service maintainane and enroll the driver identity with alerting them the next service date. ",
      link: "https://github.com/Vigneshl59/vehicle-management-system"
    },
    {
      name: "Portfolio",
      image: Portfolio1,
      desc: "Its about my Portfolio with all my known skills.",
      link: "https://github.com/Vigneshl59/Portfolio"
    },
    {
      name: "Food_app",
      image: Food_app,
      desc: "Its about the flutter project with the ordering and delivery the food. ",
      link: "https://github.com/Vigneshl59/Food-delivery-app"
    },
    
    
    {
      name: "Guess_the_num",
      image: Guess_the_num,
      desc: "It is the project about guessing the correct number which the user can chosse, but it can randomly choose the new number.",
      link: "https://github.com/Vigneshl59/guess_the_number"
    },
  ]);
  const [work_projects] = useState([
    {
      name: "Ecommerce_website",
      image: ecommerce,
      desc: "This is about the ecommerce website based on the online product buying..",
      link: "https://github.com/Vigneshl59/Ecommerce_website"
      
      
    },
    
  ]);

  const [sections] = useState([
    {
      linkName: "Frontpage",
      Section: FrontPage,
      active: true
    },
    {
      linkName: "AboutMe",
      Section: AboutMe,
      active: false
    },
    {
      linkName: "Skills",
      Section: Skills,
      active: false
    },
    {
      linkName: "Services",
      Section: Services,
      active: false
    },
    {
      linkName: "Projects",
      Section: Projects,
      active: false,
      subtitle: "What I have made",
      projects: personal_projects
    },
    {
      linkName: "Publicity",
      Section: Publicity,
      active: false,
      projects: work_projects
    },
    {
      linkName: "Projects",
      Section: Projects,
      active: false,
      subtitle: "This projects I've currently working on...",
      projects: work_projects
    },
    {
      linkName: "Contact Me",
      Section: ContactMe,
      active: false
    }
  ]);

  const addPersonalIcon = () => {
    if (window.scrollY >= 90) {
      setShowPersonalLogo(true);
    } else {
      setShowPersonalLogo(false);
    }
  };

  const themeSwitcher = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const changePath = () => {
    navigate("/portfolio"); // Updated to useNavigate
  };

  window.addEventListener('scroll', addPersonalIcon);

  return (
    <div className="App" inusetheme={`${theme}`}>
      <Header changeThemeHandler={themeSwitcher} theme={theme} />
      <Link to={'Frontpage'}
            smooth={true}
            duration={1400}
            onClick={changePath}
      >
        <img src={PersonalLogo} className={showPersonalLogo ? "PersonalLogoIn" : "PersonalLogoOut"} alt="Personal logo" />
      </Link>
      {sections.map((section, i) =>
        <section key={i}>
          <section.Section projects={section.projects} subtitle={section.subtitle} />
        </section>
      )}
      <Footer />
    </div>
  );
}

export default App;
