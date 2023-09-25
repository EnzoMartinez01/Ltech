import React from 'react';
import '../Static/Css/footer.css';
import logowhite from '../Static/Images/Principal/logowhite.png';
import facebook  from '../Static/Images/Redes/facebook.png';
import instagram  from '../Static/Images/Redes/instagram.png';
import tiktok  from '../Static/Images/Redes/tiktok.png';
import email  from '../Static/Images/Redes/email.png';
import linkedin from '../Static/Images/Redes/linkedin.png';



export default function () {
  return (
    <>
        <footer className='footer'>
            <div className='img-text'>
                <img src={logowhite} alt="L'TECH"/>
                <h2>Eleva tu imaginación al siguiente nivel.</h2>
            </div>
            <div className='redes'>
                <a href="https://www.facebook.com/Ltech01" target='_blank'><img src={facebook} alt="Facebook" /></a>
                <a href="https://www.tiktok.com/@iamenzo_15?is_from_webapp=1&sender_device=pc" target='_blank'><img src={tiktok} alt="TikTok" /></a>
                <a href="https://www.instagram.com/iamenzo_01/" target='_blank'><img src={instagram} alt="Instagram" /></a>
                <a href="linkedin.com/in/enzomartinez24" target='_blank'><img src={linkedin} alt="Linkedin" /></a>
                <a href="mailto:enzomartinez2412@gmail.com" target='_blank'><img src={email} alt="Email" /></a>
            </div>
        </footer>
    </>
  )
}
