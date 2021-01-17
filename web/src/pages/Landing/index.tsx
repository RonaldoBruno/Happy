import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import LogoImg from '../../assets/images/logo.svg'

import './styles.css';

function Landing() {
  return (

    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Happy" />

        <main>
          <h1>Leve fecilidade para o mundo</h1>
          <p>Mude o dia de muitos bichinhos.</p>
        </main>

        <div className="location">
          <strong>Paraná</strong>
          <span>Toledo</span>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;