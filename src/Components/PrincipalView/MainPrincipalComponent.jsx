import React from 'react';
import logoblack from '../../Static/Images/Principal/logo2.png';
import enzo from '../../Static/Images/Principal/Enzo Martinez.png';
import ltech from '../../Static/Images/Principal/Ltech.png';
import nolimit from '../../Static/Images/Principal/NLSTI.png';
import '../../Static/Css/mainPrincipal.css'
import { Link } from 'react-router-dom';

export default function MainPrincipalComponent() {
    return (
        <>
            <section className='section1'>
                <div className='main1'>
                    <p className='top'>Programador - Técnico TI</p>
                    <h1>Hola, soy Desarrollador Web, y tecnico en Soporte TI</h1>
                    <br />
                    <p className='text'>+1 año de experiencia siendo Desarrollador Web, +2 años de experiencia en Soporte. Mi misión es solucionar problemas tecnologicos, y desarrollar un sitio web para usted.</p>
                    <br />
                    <a href="https://wa.link/tco1vl" target='_blank' className='whatsapp'>
                        <div>

                            <i class="fa-brands fa-whatsapp"></i>
                            Let's chat on Whatsapp

                        </div>
                    </a>
                </div>
                <div className='img-main1'>
                    <img src={logoblack} alt="L'Tech" />
                </div>
            </section>
            <br />
            <section className='section2'>
                <div className='aboutme-container'>
                    <div className='aboutme-text'>
                        <h2>SOBRE MI</h2>
                        <br />
                        <p>
                            Soy Enzo Martinez, programador web junior, y tecnico en soporte tanto en TI, como en consolas, con una especialización en Python y Java, en los frameworks Django y Spring Boot, enfocados en el backend, cuento con más de dos años de experiencia en Soporte, y +1 año programando.
                            <br />
                            Un poco sobre mi, es que me gusta jugar futbol, escuchar musica, ver peliculas, y jugar videojuegos. Este es mi portafolio, y espero que les guste.
                        </p>
                        <br />
                        <a href="https://drive.google.com/file/d/1iucbXXxmXbL7wh5LIpIQ5ZnXBGAWbW-q/view?usp=sharing" target='_blank'><button>My Resumen</button></a>
                    </div>
                    <div className='aboutme-img'>
                        <img src={enzo} alt="Enzo Martinez" />
                    </div>
                </div>
            </section>
            <br />
            <section className='section3'>
                <div className='banner'>
                    <h2>Mis Proyectos</h2>
                </div>
                <div className='projects-container'>
                    <div className='project1'>
                        <div className='project1-text'>
                            <h3>L'TECH</h3>
                            <p>Web desarrollado en dos frameworks, en el Frontend (React - Vite) y en el Backend (Spring Boot), Portafolio Web.</p>
                            <br />
                            <a href="">LTECH - PAGINA</a>
                        </div>
                        <div className='project1-img'>
                            <img src={ltech} alt="L'tech" />
                        </div>
                    </div>
                    <div className='project2'>
                        <div className='project1-img'>
                            <img src={nolimit} alt="NL Solutions TI" />
                        </div>
                        <div className='project2-text'>
                            <h3>NO LIMIT SOLUTIONS TI</h3>
                            <p>Web desarrollado en React para una consultoria de transofrmación digital de la cual formo parte, desarrollado por solo Frontend</p>
                            <br />
                            <a href="https://nolimitsolutionsti.github.io/NoLimitSolutionsTI/" target='_blank'>NL SOLUTIONS TI - PAGINA</a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
