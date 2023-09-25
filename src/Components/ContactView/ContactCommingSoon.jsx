import React from 'react';
import ltech from '../../Static/Images/Principal/logo2.png';
import '../../Static/Css/contact.css';
import axios from 'axios';

export default function ContactCommingSoon() {
  return (
    <>
        <section className='section1-contact'>
            <div className='section1-contact-text'>
                <h1>L'TECH</h1>
                <p>Buscando los mejores productos para un resultado beneficioso, potencial, y fluido.</p>
            </div>
            <div className='section1-contact-img'>
                <img src={ltech} alt="Ltech" />
            </div>
        </section>
        <br />
        <section className='section2-contact'>
            <div className='section2-contact-title'>
                <h2>Contactanos mediante este formulario</h2>    
            </div>
            <p className='construccion'>EN CONSTRUCCIÓN</p>
        </section>
    </>
  )
}
