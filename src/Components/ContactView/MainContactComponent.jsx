import React, { useState } from 'react';
import '../../Static/Css/contact.css';
import ltech from '../../Static/Images/Principal/logo2.png';
import axios from 'axios';

export default function () {
    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        telephone: '',
        message: '',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({ ...data, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://ltechbacksb-production.up.railway.app/api/v1/ltech/forms/createform', data);
            console.log("Mensaje Enviado con éxito");
            
            window.alert("Mensaje Enviado con éxito");
        } catch(error){
            console.log(error);
        }
    };

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
            <div className='section2-contact-form'>
                <form onSubmit={handleSubmit} method="post" action=''>
                    <input type="text" name="name" className='input-name-lastname' placeholder='Nombre' value={data.name} onChange={handleChange} />
                    <input type="text" name='lastname' className='input-name-lastname' placeholder='Apellidos' value={data.lastname} onChange={handleChange}/>
                    <input type="email" name='email' className='input-email-telefono' placeholder='Email' value={data.email} onChange={handleChange}/>
                    <input type="tel" name='telephone' className='input-email-telefono' placeholder='Telefono' value={data.telephone} onChange={handleChange}/>
                    <textarea name="message" id="message" placeholder='Mensaje para contactar' className='input-message' cols="30" rows="10" value={data.message} onChange={handleChange}></textarea>
                    <button type="submit" className='buttonSub'>Enviar</button>
                    <button type="reset" className='buttonRes'>Limpiar</button>
                </form>
            </div>
        </section>
    </>
  )
}
