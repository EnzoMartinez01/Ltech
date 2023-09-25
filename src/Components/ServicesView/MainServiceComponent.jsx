import React from 'react';
import '../../Static/Css/services.css';
import section1 from '../../Static/Images/Services/section1.png';
import service1 from '../../Static/Images/Services/service1.png';
import service2 from '../../Static/Images/Services/service2.png';
import software1 from '../../Static/Images/Services/software1.png';
import software2 from '../../Static/Images/Services/software2.png';
import { Link } from 'react-router-dom';

export default function MainServiceComponent({ idService, nameService, descriptionService }) {
    console.log(idService, nameService, descriptionService);
    return (
        <>
            <section className='section1'>
                <div className='section1-text'>
                    <h1>
                        ¿Quieres que tus equipos se mantengan funcionando por mucho más tiempo?
                    </h1>
                    <br />
                    <p>
                        Para más información, no olvides revisar nuestros servicios y contactarnos.
                    </p>
                </div>
                <div className='section1-img'>
                    <img src={section1} alt="" />
                </div>
            </section>
            <br />
            <section className='section2-service'>
                <div className='section2-title'>
                    <h2>Contamos con los siguientes servicios en Hardware</h2>
                </div>
                <div className='services-container'>
                    <div className='services'>
                        <div className='service-img'>
                            <img src={service1} alt="" />
                        </div>
                        <br />
                        <div className='service-text'>
                            <h2>Mantenimiento Preventivo - Correctivo PC</h2>
                            <br />
                            <p>Mantener el equipo limpio, tanto de sus componentes, como su vista superficial.</p>
                        </div>
                        <br />
                        <div className='service-buttons'>
                            <Link to={"/contacto"} className='links'>
                                <button className='button1'>
                                    <i class="fa-solid fa-globe"></i>
                                    Web
                                </button>
                            </Link>
                            <Link to={"https://wa.link/tco1vl"} target='_blank' className='links'>
                                <button className='button2'>
                                    <i class="fa-brands fa-whatsapp"></i>
                                    Whatsapp
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='services'>
                        <div className='service-img'>
                            <img src={service2} alt="" />
                        </div>
                        <br />
                        <div className='service-text'>
                            <h2>Mantenimiento Preventivo - Correctivo</h2>
                            <br />
                            <p>Mantener el equipo limpio, tanto de sus componentes, como su vista superficial.</p>
                        </div>
                        <br />
                        <div className='service-buttons'>
                            <Link to={"/contacto"} className='links'>
                                <button className='button1'>
                                    <i class="fa-solid fa-globe"></i>
                                    Web
                                </button>
                            </Link>
                            <Link to={"https://wa.link/tco1vl"} target='_blank' className='links'>
                                <button className='button2'>
                                    <i class="fa-brands fa-whatsapp"></i>
                                    Whatsapp
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className='section3-services'>
                <div className='section3-services-title'>
                    <h2>Areas en las que cuento con Experiencia a nivel Software</h2>
                </div>
                <div className='software-container'>
                    <div className='software'>
                        <div className='software-img'>
                            <img src={software1} alt="Software1" />
                        </div>
                        <br />
                        <div className='software-text'>
                            <h2>Desarrollo de Sistema Web</h2>
                            <br />
                            <p>Con experiencia en frameworks tanto Frontend / Backend, para una buena transformación digital.</p>
                        </div>
                        <br />
                        <div className='software-buttons'>
                            <Link to={"/contacto"} className='links'>
                                <button className='button1'>
                                    <i class="fa-solid fa-globe"></i>
                                    Web
                                </button>
                            </Link>
                            <Link to={"https://wa.link/tco1vl"} target='_blank' className='links'>
                                <button className='button2'>
                                    <i class="fa-brands fa-whatsapp"></i>
                                    Whatsapp
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='software'>
                        <div className='software-img'>
                            <img src={software2} alt="Software2" className='img-software2' />
                        </div>
                        <br />
                        <div className='software-text'>
                            <h2>Maquetación Web / UI - UX</h2>
                            <br />
                            <p>Para una previsualización de lo que seria una web, la maquetación vendria perfecto.</p>
                        </div>
                        <br />
                        <div className='software-buttons'>
                            <Link to={"/contacto"} className='links'>
                                <button className='button1'>
                                    <i class="fa-solid fa-globe"></i>
                                    Web
                                </button>
                            </Link>
                            <Link to={"https://wa.link/tco1vl"} target='_blank' className='links'>
                                <button className='button2'>
                                    <i class="fa-brands fa-whatsapp"></i>
                                    Whatsapp
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

